import React, {useEffect, useState} from 'react';

const CheckNumberComponent = () => {
    const [numbers,setNumbers]=useState([])
    const [key,setkey]=useState('')
    const [status,setStatus]=useState('pending')

    useEffect(()=>{
        generateRandomSortedNumbers()
    },[])

    const generateRandomSortedNumbers = ()=>{
        const generateRandomNumber = (max) =>{
            return Math.max(Math.floor(Math.random() * max),1)
        }
        const randNum = []
        randNum.push(generateRandomNumber(1000)) 
        for (let i = 0; i < 1001; i++) {
            randNum.push(randNum[i]+generateRandomNumber(100))
        }
        setStatus('pending')
        setkey('')
        setNumbers(randNum)
    }

    const recursiveSearch = function (start, end) {
        
        if (start > end) return setStatus('wrong');
        
        const mid=Math.floor((start + end)/2);
        if (numbers[mid]===+key) return setStatus('correct');
        
        if(numbers[mid] > key)
        return recursiveSearch(start, mid-1);
        else
        return recursiveSearch(mid+1, end);
    }
    const search = ()=>{
       recursiveSearch(1,1001)
    }
    return ( 
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                       <p className="d-inline">select Number between {numbers[0]} and {numbers[1001]} </p>
                       <button onClick={generateRandomSortedNumbers} type="button" className="btn btn-light btn-circle"><i className="fa fa-random" aria-hidden="true"></i></button>

                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="input-group d-flex justify-content-center">
                            <div className="form-outline">
                                <input 
                                    placeholder="Search" 
                                    type="number" 
                                    id="form1" 
                                    className="form-control" 
                                    value={key} 
                                    onChange={(e)=>setkey(e.target.value)} />
                            </div>
                            <button onClick={search} type="button" className="btn btn-primary">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    status === 'correct' &&
                    <div className="row mt-5">
                        <div className="col-12 alert alert-success">
                            <p className="d-inline">correct pick </p>
                        </div>
                    </div>
                }
                {
                    status === 'wrong' &&
                    <div className="row mt-5">
                        <div className="col-12 alert alert-danger">
                            <p className="d-inline">wrong pick </p>
                        </div>
                    </div>
                }
            </div>
     );
}
 
export default CheckNumberComponent;
