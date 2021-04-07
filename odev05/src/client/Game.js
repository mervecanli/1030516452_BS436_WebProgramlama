import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Game extends Component {
        

    constructor(props) {
        super(props);
        this.state = {        
            kediIndeks : Math.floor(Math.random()*3),
            durum : undefined,
            kart : ["images/img0.PNG", "images/img0.PNG", "images/img0.PNG"],
            hak : 0,
            oyunSon : false
        }
    }

    secim = (indeks) => {
        const {kart, kediIndeks, hak, oyunSon} = this.state;

        if(!oyunSon) {
            const yeniKart = [...kart];
            let durum;

            if(kediIndeks === indeks) {
                yeniKart[indeks] = "images/img1.jpg";
                durum = "Kazandınız :)"
            } else {
                yeniKart[indeks] = "images/img2.jpg";
                if(hak === 1) {
                     durum = "Kaybettiniz:("   
                }
            }


            this.setState({
                kart:yeniKart,
                hak: this.state.hak+1,
                durum
            });

            if(durum) {
                this.setState({
                    oyunSon:true
                })
            }
        }
    }

    yeniOyun = () => {
        this.setState({
            kediIndeks: Math.floor(Math.random()*3),
            durum: undefined,
            kart : ["images/img0.PNG", "images/img0.PNG", "images/img0.PNG"],
            hak: 0,
            oyunSon: false
        })
    }


    render() {
        const { kart, durum} = this.state;
        return (
            <div>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte kedi kartını 
                    bulamaz isen 2. seçim hakkı tanınacaktır.</p>
                <img className="kart" src={kart[0]} onClick={()=>{this.secim(0)}}/>
                <img className="kart" src={kart[1]} onClick={()=>{this.secim(1)}}/>
                <img className="kart" src={kart[2]} onClick={()=>{this.secim(2)}}/> 
                <div className="mesaj">
                    <p>{durum?durum:"Kedi kartını bulmak için kartın üzerinde tıklamalısın."}</p>
                    {durum && <p>
                        Yeni bir oyun oynamak istersen <span onClick={this.yeniOyun} className='link'>buraya</span> tıklayabilirsin    
                    </p>}    
                </div>        
            </div>
        );                
    }    
}

