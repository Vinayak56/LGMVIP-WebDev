import React from 'react';
import './style.css';

const detailFetch = ({fetchU})=>{
    return(
            <div classname="list">
                {
                    fetchU.map((user, i) => {
                        return(
                                <div class='portF'>
                                    <img alt='fetchU' src={`https://reqres.in/img/faces/${fetchU[i].id}-image.jpg`} />
                                    <div>
                                        <br />
                                        <h2>{fetchU[i].first_name} {fetchU[i].last_name}</h2>
                                        <br />
                                        <h3>{fetchU[i].email}</h3>
                                    </div>
                                </div>
                            );
                    })
                }
                <p className='copy' >Copyright &copy;  Vinayak</p>
            </div>
        );
}

export default detailFetch;
