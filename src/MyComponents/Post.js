const Post = ({title,details,name,pic1,pic2,pic3,pic4,desktop}) => {
    return(
        <div class="card" style={{width: '100%', boxShadow: (desktop ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)'), border: (desktop ? '' : 'none')}}>
        <img src={pic1} class="card-img-top" alt="First Pic" />
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title"> {title}</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">{details}</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={pic2} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div>
                </div> 
                <h6 style={{marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {desktop ? <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={pic3} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>{name}</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img alt='share' src={pic4} />
                    </button>
                </div></> : <>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={pic3} alt='user1' />&nbsp;&nbsp;
                    <div style={{display: 'flex', flexDirection: 'column'}}><h6 style={{fontSize: '15px', fontWeight: '700'}}>{name}</h6>
                    <p style={{fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px'}}>1.4k views</p></div>
                </div>
                <div style={{display: 'flex'}}> 
                    <button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    <img style={{marginTop: '-3px'}} alt='share' src={pic4} />&nbsp; Share
                    </button>
                </div></>}
                </div>
            </div>
        </div>
    );
}
export default Post;