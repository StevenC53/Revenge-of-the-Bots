import React, {Component } from 'react';
import PlayerFightOptions from '../PlayerFightOptions/PlayerFightOptions.js'
import image from '../img/archer.jpg'
import botImage from '../img/archerBot.jpg'
import PlayerHealthBar from '../healthBars/PlayerHealthBar.js'
import BotHealthBar from '../healthBars/BotHealthBar.js'
import BotAttackLogic from '../BotAttackLogic/BotAttackLogic.js'

class FightScreen extends Component {

  render() {
    return (
      <div>
        <div className="fightScreen">
          <div>
            <h3>Stage {this.props.stageCounter + 1}</h3>
          </div>
          <div className="fightImages">
            <div className="flexImages">
              <div className="player">
                <p className="characterName">{this.props.name} </p>
                <PlayerHealthBar width={this.props.playerHealth}/>
                <img src={image} alt="Your character" />
              </div>
              <div className="bot">
                <p className="botName">Evil bot Billy Bob</p>
                <BotHealthBar width = {this.props.botHealth}/>
                <img src={botImage} alt="Bot's Character" />
              </div>
            </div>
          </div>
        </div>
        {
          this.props.whoseTurn()?
          <PlayerFightOptions botAndPlayerAttack={this.props.botAndPlayerAttack} checkForPotion={this.props.checkForPotion}/>:
          <BotAttackLogic botAndPlayerAttack={this.props.botAndPlayerAttack}/>
        }
      </div>
    )
  }
}
export default FightScreen
