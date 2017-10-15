var React = require('react');
/*class DynamicImageCollage extends React.Component {
  componentDidMount() {
    this.renderCanvas()
  }

  renderCanvas() {
    const { imageUrls } = this.props
    const ctx = this.refs.canvas.getContext('2d');

    const imageSizesByItemCount = {
      '3': [
        {
          offset: { x: 10, y: 50 },
          proportionalWidth: 170
        },
        {
          offset: { x: 150, y: 30 },
          proportionalWidth: 90
        },
        {
          offset: { x: 140, y: 200 },
          proportionalWidth: 80
        },
      ]
    }

    if (imageUrls) {
      _.forEach(imageUrls, (imageUrl, index) => {
        let img = new Image
        img.src = imageUrl
        
        img.onload = () => {
          let offset = imageSizesByItemCount['3'][index].offset
          let proportionalWidth = imageSizesByItemCount['3'][index].proportionalWidth

          let dx = offset.x
          let dy = offset.y
          let dWidth = proportionalWidth
          let dHeight = proportionalWidth * img.height / img.width

          ctx.drawImage(img, dx, dy, dWidth, dHeight)
        }
      })
    }
  }

  render() {
    return (
      <div>        
        <canvas ref="canvas" width={250} height={350} />
      </div>
    )
  }
}
module.Exports = DynamicImageCollage;
*/

/*class Imag extends React.Component{
  constructor(props){
    super(props);
    this.state={
      x: 40,
      y: 50
    };
    this.draw=this.draw.bind(this);
  }
  draw(){
    this.props.ctx.drawImage(this,this.x,this.y,100,100);
  }
  render(){
    return (
      <img src={this.props.src} />
      );
  }
}*/
const imgs=['https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?h=350&auto=compress&cs=tinysrgb',];
class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        for(var imgNo=0;imgNo<imgs.length;imgNo++){
        var imgObj = new Image();
        imgObj.onload = (function(i) {
            return function () {
            ctx.drawImage(imgObj, 100*i,100*i);
            }
        })(imgNo);

        imgObj.src = imgs[imgNo];
        //imgNo++; 
        }   
    }
    render() {
        return (
            <canvas ref="canvas" width={600} height={600}/>
        );
    }
}
//ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));
module.exports = CanvasComponent;