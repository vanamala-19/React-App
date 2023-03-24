const Banner = ({pic,pic2,mobile,desktop,userSigned,userdata}) => {
    return(
        <div style={{backgroundColor: 'black'}}>
            <img alt='banner' src={pic} style={{width: '100%', height: ({desktop} ? '440px' : ({mobile} ? '300px' : '200px')), marginTop: ({desktop} ? '72px' : ''), opacity: '0.5'}}/>
            <h2 className='celabel' style={{fontSize: ({mobile} ? '' : '18px'), fontWeight: '700', color: 'white', position: 'absolute', marginTop: ({desktop} ? '-150px' : ({mobile} ? '-100px' : '-70px'))}}>Computer Engineering</h2>
            <p className='celabel2' style={{fontSize: ({mobile} ? '' : '12px'), color: 'white', position: 'absolute', marginTop: ({desktop} ? '-110px' : ({mobile} ? '-65px' : '-40px'))}}>142,765 Computer Engineers follow this</p>
            {!{desktop} && <>
            <p><img alt='back' src={pic2} style={{cursor: 'pointer', position: 'absolute', marginTop: ({mobile} ? '-275px' : '-183px'), marginLeft: '3.75%'}}/></p>
            {userSigned ? <button onClick={() => userdata(false)} style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: ({mobile} ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}} class="btn btn-sm" type="button">Leave Group</button>:
            <button style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: ({mobile} ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}}  data-bs-toggle="offcanvas" data-bs-target="#createaccountcanvas" aria-controls="offcanvasBottom" class="btn btn-sm" type="button">Join Group</button>}</>}
        </div>
    );
}

export default Banner;