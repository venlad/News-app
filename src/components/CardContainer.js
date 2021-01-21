import React, { useEffect, useContext, useState } from "react";
import { Context } from "../Context";
import { API_KEY } from "../credential";
import { Card, Col, Row, Button, Pagination, Space, Divider} from 'antd';
import CardComponent from "./Card";
import Loading from "./Spin";

const CardContainer = () => {

  const [currentPage, setCurrentPage] =  useState(1)
  const [postPerPage] =  useState(10)

  const { handleFetch, data, query, searchCards, category, loading } = useContext(Context);
  console.log("query from card", category)

  useEffect(() => {
    const url = searchCards ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`  : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&pageSize=100`;
    handleFetch(url);
  }, [searchCards, query, category]);


  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = data ? data.slice(indexOfFirstPost, indexOfLastPost) : data  

  const pageChange = (val) => {
    setCurrentPage(val)
    console.log("val", val)
  }

  return(
    
    <div className="site-card-wrapper">
      
      {/* pagination for page change */}
      <Pagination className="page" current={currentPage} onChange={pageChange} total={data.length} />

    
      <Divider orientation="left" style={{color: "white"}}>
        News from News API
      </Divider>

      {searchCards && (<h3 style={{color: "white"}}>Results related to {query}</h3>)}
    
    {/* Cards will bw rendered here */}
    <Row gutter={16}>
        {loading && <Loading />}
        {
          currentPost.map((result,i) => (
            <CardComponent key={i} data={result} />
          ))
        }    
    </Row>

  </div>
  );
};
export default CardContainer;


