import {Component} from 'react'
import substrac from '../../../assets/svg/substrac.svg';
import {style} from './subsctract';

export class SubstracIcon extends Component<style>{
    render(){
        return(
            <div style={this.props}>
                <img src={substrac} alt="substrac"/>
            </div>
        )
    }
}