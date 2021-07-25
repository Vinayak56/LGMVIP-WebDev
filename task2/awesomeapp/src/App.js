import React, {Component}  from 'react';
import Infolist from './detail';
import Navb from './Nav-bar';
import Loader from "react-loader-spinner";
import './style.css';

class Detail extends Component{

    constructor(){
        super()
        this.state={
            fetchU: [],
            btnC: false,

        }
    }

    submit = () => {
        this.setState({btnC: !this.btnC})
        setTimeout(() => {
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({fetchU: users.data})
            });
        }, 2000);
        return () =>clearTimeout(6000);
    }


    render(){
        if(this.state.btnC === false){
            return (
              <>
                <Navb btnclick={this.submit}/>
              </>
            );

        }

        else if(this.state.fetchU.length === 0){
            return (
                <>
                  <h1 className='list'>Fetching Data</h1>
                  <div className='des'>
                      <Loader className="de" type="Circles" color="red" height={250} width={250} timeout={4000}/>
                  </div>
                </>
              );
        }

        else{
            return(
                <>
                  <div className='list'>
                      <h1>User Details</h1>
                      <Infolist fetchU={
                          this.state.fetchU.filter(fetchU=>{
                            return fetchU.first_name.toLowerCase();
                        })
                      }/>

                  </div>
                 </>
              );
        }

    }

}

export default Detail;