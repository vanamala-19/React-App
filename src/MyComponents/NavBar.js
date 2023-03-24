const  NavBar = ({pic1,pic2,desktop,userSigned,userdata}) =>{
  return (
    <div className='whole'>
      {desktop ? <nav style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}} class="nav">
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <a style={{color: 'black'}}class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
      <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Article</a>
      <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Event</a>
      <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Education</a>
      <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Job</a>
      </div><div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{marginRight: '3%', width: '133px'}} class="btn-group">
          <button class="btn btn-sm" style={{backgroundColor: '#EDEEF0'}} type="button">
              Write a Post
          </button>
          <button type="button" style={{borderColor: '#EDEEF0', backgroundColor: '#EDEEF0'}} class="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split">
          </button>
          </div>
          {userSigned ? 
          <button onClick={() => userdata(false)} style={{width: '134px', color: '#6A6A6B', borderColor: '#6A6A6B'}} class="btn btn-sm" type="button">
              <span><img style={{marginTop: '-2px'}} alt='->' src={pic1} /></span> &nbsp; Leave Group
          </button>: 
          <button style={{width: '134px'}} data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm btn-primary" type="button">
              <span><img alt='+' src={pic2} /></span> &nbsp; Join Group
          </button>}</div>
      </nav> : <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p style={{fontWeight: '600', marginLeft: '3.75%'}}>Posts(368)</p>
              <button style={{marginBottom: '10px', marginTop: '-10px', marginRight: '3.75%', backgroundColor: '#F1F3F5', color: 'black'}} class="btn dropdown-toggle" type="button">
                  Filter: All
              </button>
      </div>}
    </div>
  );
}

export default NavBar;