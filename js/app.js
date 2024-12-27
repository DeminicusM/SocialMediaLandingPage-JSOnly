// let root = document.getElementsByClassName("root")[0];
let style = document.createElement("style");
let root = document.createElement("div");
let body = document.getElementsByTagName("body")[0];
let card = document.createElement("section");
let html = `
<div class="card__wrapper">
          <img
            src="https://i1.sndcdn.com/avatars-SuppRnZpZTefMpUC-tcLRyg-t1080x1080.jpg"
            class="card__user-img"
          />
          <div class="card-info">
            <span class="card__name">Bownce Gawd</span>
            <span class="card__title">Producer / Engineer</span>
          </div>
          <div class="card__socials">
            <div class="card__icon card__icon--fb">
              <span class="card__icon-box">
                <i class="fa-brands fa-facebook"></i>
              </span>
              <span class="card__icon-title"> Facebook </span>
            </div>
            <div class="card__icon card__icon--ig">
              <span class="card__icon-box">
                <i class="fa-brands fa-instagram"></i>
              </span>
              <span class="card__icon-title"> Instagram </span>
            </div>
            <div class="card__icon card__icon--tk">
              <span class="card__icon-box">
                <i class="fa-brands fa-tiktok"></i>
              </span>
              <span class="card__icon-title"> Tiktok </span>
            </div>
          </div>
        </div>
`;
let cssStyles = `
.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
}
.card__wrapper{
    height: 400px;
    padding: 20px; 
    max-width: 300px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, .22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card__user-img{
    border: 2px solid #FBC25F;
    height: 70px;
    width: 70px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
.card-info{
    margin-bottom: 2rem;
}
.card__name{
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}
card__title{
    display: block;
    font-size: .7rem;
    margin-bottom: 2rem;
    text-align: center;
}
.card__icon{
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid black;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
}
.card__icon-box{
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card__icon-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.card__icon--fb{
    color: #2c5eff;
    border: 1px solid #2c5eff; 
}
.card__icon--fb:hover{
    background: #2c5eff;
    color: white;
}
.card__icon--ig{
    color: #773fe7;
    border: 1px solid #773fe7; 
}
.card__icon--ig:hover{
    background: #773fe7;
    color: white;
}
.card__icon--tk{
    color: #f96262;
    border: 1px solid #f96262; 
}
.card__icon--tk:hover{
    background: #f96262;
    color: white;
}
`;
body.prepend(root);
root.classList.add("root");
card.classList.add("card");
root.prepend(card);
root.style.cssText = `background: url('https://content.beatstars.com/fit-in/500x500/filters:format(.jpeg):quality(80):fill(000000)/users/prod/17838/image/1641856694/bownce-gawdlogo-biggerpn.png');
    background-size: cover;
    background-position: center;`;
document.getElementsByClassName("card")[0].innerHTML = html;
