export default function Secondary() {
    return (
        <div className='secondary'>
            <p className='msg'>You’ve used <span>815 GB</span> of your storage</p>

            <div className='range'>
                <div className='bar'>
                    <div className="bar-dot"></div>
                </div>
            </div>

            <div className='numbers-flex'>
                <p className='numbers'>0 GB</p>
                <p className='numbers'>1000 GB</p>
            </div>

            <div className='card'>
                <p className='text'><span>185</span>GB Left</p>
            </div>
        </div>
    )
}
