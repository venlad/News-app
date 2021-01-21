//importing components and dependencies
import { Header } from "antd/lib/layout/layout";
import React, {useContext, useState} from "react";
import { Input, Space, Select, PageHeader } from 'antd';
import { Context } from "../Context";

const { Search } = Input;
const { Option } = Select;

//Navbar component
const Appbar = () => {
  
  const {handleSubmit, handleCategory, category } = useContext(Context)
  const [input, setInput] = useState("")


  return (
    <>
    <Header className="header" >
      <div className="logo">
        <h2>NEWS-app</h2>      
      </div>
    </Header>

    
    <div className="site-page-header" className="inner_nav">
      
      {/* pagination component */}
      <PageHeader
        title="Search "
        subTitle="Favourite News By Category"
      >
          
           <form 
           className="inner_nav_form"
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(input)
              }}>

              <Space direction="vertical">
                <Search
                  className="inputs" 
                  placeholder="input search text" 
                  value={input} 
                  onChange={e => setInput(e.target.value)} 
                  enterButton 
                />
              </Space>
            </form>
            
            <Select
              className="inputs"
              showSearch
              placeholder="Select a Category"
              onChange={handleCategory}
            >
            <Option value="general">General</Option>
            <Option value="health">Health</Option>
            <Option value="science">Science</Option>
            <Option value="technology">Technology</Option>
            <Option value="sports">Sports</Option>
            </Select>
   

      </PageHeader>
    </div>
    </>
  );
};
export default Appbar;





