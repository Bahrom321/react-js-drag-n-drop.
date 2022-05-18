import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from "../data"


function Container() {
 
    
    const {id} = useParams()
    const [boards, setBoards] = useState(Data)
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null)

    const handleDelete = id => {
        setBoards(boards.filter(item=>item.id !== id))
        
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if(e.target.className == 'item') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, board, item) {
        setCurrentItem(item)
        setCurrentBoard(board)
    }
    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex +1, 0, currentItem)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board 
            }
            if(b.id === currentBoard.id) {
                return currentBoard    
            }
            return b
        }))
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard    
            }
            return b
        }))
    }

    const clickMe = () => Alert.alert


    return (

 <div className='h'>
        <h1>Explore the space</h1>
    <div className='row row-cols-1 row-cols-md-3 g-4 con'>

        {boards.map(board =>(
            <div>
                <h3 className="board_title">
                    {board.title}
                </h3>
            <div 
            className='board'
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e)=> dropCardHandler(e, board)}
            >
                
                {board.items.map(item=>(
                
                <div onClick={() => handleDelete(item.id)}>
                    <div 
                    onDragOver={(e)=> dragOverHandler(e)}
                    onDragLeave={(e)=> dragLeaveHandler(e)}
                    onDragStart={(e)=> dragStartHandler(e, board, item)}
                    onDragEnd={(e)=>dragEndHandler(e)}
                    onDrop={(e)=> dropHandler(e, board, item)}
                    onClick={clickMe}
                    draggable={true}
                    
                    className="item"
                    >

                        {item.title}
                        </div>
                    </div>
                
                ))}
            </div>

            </div>
        ))}
        </div>
    </div>
  )
}

export default Container