import React from 'react';

class Circle extends React.Component {


  // shouldComponentUpdate = (nextProps) => {
  //   console.log('next props', nextProps);
  //   console.log('props', this.props);
  //   if (nextProps !== this.props.color) { return true}
  //   else {return false}
    
  // }

  shouldComponentUpdate = (nextProps) => {
    console.log('nextProps', nextProps);
    console.log('this.props', this.props);
    if (this.props.color === nextProps.color) { 
      return false
    }

    else { return true}
    
  }
  
  
  

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
