import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            people: [
                {
                    name: 'Charlene',
                    favColor: 'green',
                    sport: 'figure skating'
                },

                {
                    name: 'Mary',
                    favColor: 'red',
                    job: 'chef'
                },

                {
                    name: 'Steve',
                    loves: 'dancing',
                    sleeps: '8 hours'
                },

                {
                    name: 'John',
                    favColor: 'blue',
                    loves: 'singing & playing piano'
                }

            ],

            userInput: '',
            filteredArray: []

        }
    }


    changeValue(val) {
        this.setState({ userInput: val });
      }
    
      filterPeople(prop) {
        let people = this.state.people;
        let filteredPeople = [];
    
        for ( let i = 0; i < people.length; i++ ) {
          if ( people[i].hasOwnProperty(prop) ) {
            filteredPeople.push(people[i]);
          }
        }
    
        this.setState({ filteredPeople: filteredPeople });
      }



    render(){

        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">People: { JSON.stringify(this.state.people, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.changeValue(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) }</span>
            </div> 
        )
    }

}