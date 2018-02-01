

constructor(props){
    super(props)
   }
   
   render(){
     return(
       <li>
         <span>{this.props.text}</span>
         <i className='fa fa-check'></i>
         {/* <button onClick={(event) => this.props.removeItem(event.target.value, this.props.index)}>
           
         </button> */}
       </li>
     )
   }