import './CircleCard.styled.css'

const CircelCard=(props) => {
    return <div className='circle-card'>
        <img src={props.img} alt="cat" />
        <small> Animal </small>
        <h2 className="circle-card-title">{props.title}</h2>
        <div style={{color: 'green',fontSize: '12px'}}> Rp. 10.000</div>

        <button style= {{
        backgroundColor: 'green',
        border: 'none',
        color: '#FFF', 
        borderRadius: '12px',
    padding: '8px',
    margin: '8px'}}
onClink={() => props.setCart(1)}
>
+ Add to card
</button>
</div>
}

export default CircelCard