import React from 'react';
import styled from 'styled-components';


const StyledDivPagination = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  border-radius: 50px;

  list-style: none;
  font-family: 'Kanit', sans-serif;
  font-weight: 500;

  p {
    margin: 0px;
  }
`

const StyledLi = styled.li`
    font-size: 16px;
    color:#2a542a;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;

    &:hover {
        color: #ffffff;
        background-color: #8fbc8f;
    }
`

const PageNumber  = styled(StyledLi)`
    margin: 0 1px;
        
    &.active {
        color: #ffffff;
        background-color: #8fbc8f;
    }
`

const PrevNext = styled(StyledLi)`
    padding: 0 12px;
`


const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    let visiblePages = 5;

    if (screen.width < 450) {
        visiblePages = 3;
    }
        
    const getPageNumbers = () => {
        
        let pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, currentPage + Math.floor(visiblePages / 2));
        
    
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        
        if (startPage > 2) {
            pages.unshift("...");
            pages.unshift(1);
        } else if (startPage === 2) {
            pages.unshift(1);
        }
        
        if (endPage < totalPages - 1) {
            pages.push("...");
            pages.push(totalPages);
        } else if (endPage === totalPages - 1) {
            pages.push(totalPages);
        }
        
        return pages;  
          
    };

    const handleClick = (value) => {
        setCurrentPage(value)
    }

    return (
        <StyledDivPagination>
            <StyledUl>
                {
                    currentPage !== 1 && (
                        <PrevNext onClick={() => handleClick(currentPage - 1)}>Prev</PrevNext>
                    )
                }
                
                {
                    getPageNumbers().map(page => {
                        if (page === "...") {
                            return <p>...</p>;
                        }
                        return (
                            <PageNumber key={page} className={currentPage === page ? 'active' : ''} onClick={() => handleClick(page)}>
                                <li>{page}</li>
                            </PageNumber>
                        )
                    })
                }

                {
                    currentPage !== totalPages && (
                        <PrevNext onClick={() => handleClick(currentPage + 1)}>Next</PrevNext>
                    )
                }
                
            </StyledUl>
        </StyledDivPagination>
    );
};

export default Pagination;
