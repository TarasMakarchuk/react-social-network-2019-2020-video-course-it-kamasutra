import React, {Component} from 'react';
import Instruments from "./Instruments";

class InstrumentsContainer extends Component {

    state = {
        instruments: [
            {id: 1, toolName: {ru: 'перфоратор', us: 'hammer drill'}},
            {id: 1, toolName: {ru: 'болгарка + насадки + удлинитель', us: 'grinder'}},
            {id: 2, toolName: {ru: 'дрель', us: 'drill'}},
            {id: 3, toolName: {ru: 'свёрла', us: 'drill'}},
            {id: 4, toolName: {ru: 'сусло', us: 'must'}},
            {id: 5, toolName: {ru: 'пистолет для силикона', us: 'silicone gun'}},
            {id: 6, toolName: {ru: 'пилка по металлу', us: 'metal file'}},
            {id: 7, toolName: {ru: 'шуруповёрт', us: 'screwdriver'}},
            {id: 7, toolName: {ru: 'уголок', us: 'a corner'}},
            {id: 8, toolName: {ru: 'ролик для обоев', us: 'wallpaper roller'}},
            {id: 9, toolName: {ru: 'дюбеля', us: 'dowels'}},
            {id: 10, toolName: {ru: 'миксер', us: 'mixer'}},
            {id: 11, toolName: {ru: 'силикон', us: 'silicone'}},
        ],
        newTool: []
    };

    changeHandlerInputTools = (event) => {
        this.setState({
            newTool: event.target.value
        });
    };

    clickAddHandler = () => {
        let newToolText = this.state.newTool;
        let oldState = this.state.instruments;
        let newState = oldState.push({
            id: this.state.instruments.length + 1,
            toolName: {ru: newToolText, us: newToolText},

        });
        this.setState({
                newState,
            newTool: ''
            }
        );

        console.log('newToolText');
        console.log(newToolText);
    };


    render() {
        window.newTool = this.state;
        return (
            <>
                <input onChange={this.changeHandlerInputTools}  value={this.state.newTool}/>
                <button onClick={this.clickAddHandler}>Add</button>
                {this.state.instruments.map(tool => {
                    return <Instruments
                        key={tool.id}
                        id={tool.id}
                        toolNameRu={tool.toolName.ru}
                        toolNameEn={tool.toolName.us}

                    />
                })}
            </>
        )
    }

}

export default InstrumentsContainer;