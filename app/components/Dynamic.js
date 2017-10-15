var React=require('react');

class DynamicImageCollage extends React.Component {
  componentDidMount() {
    this.renderCanvas();
  }

  renderCanvas() {
    const imageUrls = ['https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?h=350&auto=compress&cs=tinysrgb','https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?h=350&auto=compress&cs=tinysrgb'];
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
      for(imageUrls, (imageUrl, index) => {
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
      });
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

module.exports=DynamicImageCollage;
