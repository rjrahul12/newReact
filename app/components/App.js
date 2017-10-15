var React = require('react');
var ReactDOM = require('react-dom');
//var DynamicCollage = require('./components/DynamicCollage');

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',arr: []};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    /*let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    let img = <img src={this.state.imagePreviewUrl}/>
    reader.readAsDataURL(file); */
    const ctx = this.refs.canvas.getContext('2d')
    let ar= this.state.arr;
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            //canvas.width = img.width;
            //canvas.height = img.height;
            //ctx.drawImage(img,0,0,200,200);
            //ctx.drawImage(img,100,100,400,400);
        }
        img.src = event.target.result;
        ar=ar+[img.src];
    }

    this.setState({
      arr: {ar}
    })
    reader.readAsDataURL(e.target.files[0]);  
    for(var i in ar){
      var img = new Image;
      img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
      };
      img.src = ar[i];
    }
    //ctx.drawImage(img,0,0, 100, 100);
  }

  render() {
    /*let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }*/

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="canvas">
          <canvas ref="canvas" width={600} height={600}/>
        </div>
      </div>
    )
  }
}
  
//ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));
module.exports = ImageUpload;

