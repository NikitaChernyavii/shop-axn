import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'Zip',
                    name: 'Zipka`s'
                },
                {
                    key: 'Hoodie',
                    name: 'Hoodie`s'
                },
                {
                    key: 'Jacket',
                    name: 'Jacket`s'
                },
            ]
        }

    }
    
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name} 
            </div>
        ))}
      </div>

      
      
  )
  }
}

export default Categories