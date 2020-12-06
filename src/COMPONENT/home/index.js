// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement, reset, changeValue } from '../store/AC/counter';

// class Home extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <input type='text'></input>
//                 <button>ADD</button>
//                <p>
//                { this.props.value}
//                </p>
//                 <button onClick={this.props.increment} > increment </button>
//                 <button onClick={this.props.decrement} > decrement </button>
//                 <button onClick={this.props.reset} > reset </button>
//                 <button onClick={() => this.props.changeValue(2)} > 2 </button>
//                 <button onClick={() => this.props.changeValue(3)} > 3 </button>
//                 <button onClick={() => this.props.changeValue(4)} > 4 </button>
//                 <button onClick={() => this.props.changeValue(5)} > 5 </button>
//                 <button onClick={() => this.props.changeValue(6)} > 6 </button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         value: state.counter.value
//     }
// }
// const mapDispatchToProps = { increment, decrement, reset, changeValue };

// export default connect(mapStateToProps, mapDispatchToProps)(Home)