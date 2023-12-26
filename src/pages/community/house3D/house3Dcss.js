import styled from 'styled-components'


export const HouseMain3DWrap = styled.div`
    width: 1400px;
    margin:auto;
    em {display:block; margin-bottom:10px;}
`

export const Houselist3DWrap = styled.div`
ul{ 
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    
    li {

       
    }
}
`

export const Houseitem3DWrap = styled.div`
 ul{ text-align:center;
    margin-bottom:50px;
    li{ 
        div{    
            overflow:hidden;
            border-radius:10px;
            .toto{ font-size:12px;}
            .khj{position: relative;
                img{ z-index:-1;
                    width:440px;
                }
                    p{
                    cursor: pointer;
                    font-size:30px;
                    color:rgba(153,153,153,0.7);
                    position: absolute;
                        right:0;
                        bottom:15px;
                        z-index:100;
                     background: none; 
                        /* border:1px solid #fff; */
                    }
            }
            .hitext{
                margin:auto;
                width:380px;
                height:55px;
                font-weight:600;
                text-align:center;
                word-wrap: break-word;}
            img{border-radius:10px; 
                overflow:hidden;
                transition:0.2s;
                width: 310px;
                height: 300px;
                margin-bottom:10px;
                &:hover{transform:scale(1.05)}    
            }
            span{ color:#999;}
            .maintop {
                display:flex;
                p{margin-top:10px;
                    line-height:20px;
                    
                    img{width: 20px;
                        height:20px;
                        margin-left: 100px; 
                        margin-right: 10px;
                    }
                }
            }
           
        }
    }
 }
`
export const Showpop = styled.div`
            width:200px;
            z-Index:100;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-Color: #3c3c3c;
            border: 1px solid #999;
            border-Radius: 5px;
            /* box-Shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */

`
export const Pop = styled.div`
 color:#fff; 
 text-Align: center;
`




export const HouseArray3DWrap = styled.div`
select {margin-right:5px;
        padding-left:5px;
        border-radius:5px;
        margin-top:10px;
        border:1px solid #000; 
        border:none;
        background-color:#e3e3e3; 
        height:30px;
        transition:0.5s;

        margin-bottom:60px;
        
        transition:0.3s;
        &:hover {background: #82B1FF;}
        option{
                background: #e5e5e5;
        }
}
`
export const House3DtopWrap = styled.div`
    .top {          

        .inner {
            display:flex;
            padding-right:65px;
            padding-left:65px;
            margin-top: 20px;
            text-align:center;
            justify-content:space-between;
            button {
                width:400px;
                height:50px;
                margin-bottom:50px;
                border-radius:5px;
                border: 1px solid #dcdcdc;
                background: #fff;
                font-weight:500;
                font-size:15px;
                cursor: pointer;
                transition:0.3s;
                &:hover{background: skyblue; color:#fff;}
            }
        }
    }

`



