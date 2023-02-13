import React, { useState } from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 5px 15px;
  list-style: none;
`;

const StyledLi = styled.li`
    font-weight: 600;
    font-size: 16px;
    color:#2a542a;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
`

const PageNumber  = styled(StyledLi)`

    border-radius: 50%;
        
    a {
        text-decoration: none;
    }
    
    &:hover {
        color: #ffffff;
        background-color: #8fbc8f;
    }

    &.active {
        color: #ffffff;
        background-color: #8fbc8f;
    }
`

const PrevNext = styled(StyledLi)`
    margin: 0 3px;
`

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    let startPage = 1;
    let endPage = totalPages;
    // const [showPages, setShowPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const getPageNumbers = () => {
        let pages = [];
        // let startPage, endPage;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };
    const handleClick = (value) => {
        setCurrentPage(value)
    }

    return (
        <StyledUl>
            <PrevNext onClick={() => handleClick(currentPage - 1)}>Prev</PrevNext>
            {
                getPageNumbers().map(page => (
                    <PageNumber key={page} className={currentPage === page ? 'active' : ''} onClick={() => handleClick(page)}>
                        <li>{page}</li>
                    </PageNumber>
                    
                ))
            }
            <PrevNext onClick={() => handleClick(currentPage + 1)}>Next</PrevNext>
        </StyledUl>
    )
}

export default Pagination;
