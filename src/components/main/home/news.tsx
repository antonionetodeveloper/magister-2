const News = async () => {
    const response = await fetch('https://endpoint.free.mockoapp.net/agenda/teste2')
    const items = await response.json();

    return (
        <div className="bg-white rounded news-component" style={{height: "fit-content", width:"40%"}}>
            <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: "rgba(80, 153, 153, 0.2)" }}>
                <h2 className="grade-title" style={{ color: "#000070" }}>Notícias</h2>
                <button className="btn border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
                    </svg>
                </button>
            </div>
            {items.map((item: GradeItemProps) => (
                <Item />
            ))}
        </div>
    )
}

// Podreria fazer um fetch, mas nesse caso, 
// necessitaria receber imagens, então não é viável usar o mocko
const Item = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex gap-4 py-4 px-3">
                <img 
                    src="/home/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" 
                    className="w-50 h-100" 
                    style={{borderRadius: '15px;'}} 
                    alt="banner" 
                />
                <div className="d-flex flex-column justify-content-center gap-1">
                    <p className="m-0 fs-5" style={{ color: "#0000fa" }}><strong>Nome da notícia</strong></p>
                    <p className="m-0 text-muted d-inline">Descrição...<span> - 00/00/0000</span></p>
                </div>
            </div>
            <hr className="m-0" />
            <div className="d-flex gap-4 py-4 px-3">
                <img 
                    src="/home/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" 
                    className="w-50 h-100" 
                    style={{borderRadius: '15px;'}} 
                    alt="banner" 
                />
                <div className="d-flex flex-column justify-content-center gap-1">
                    <p className="m-0 fs-5" style={{ color: "#0000fa" }}><strong>Nome da notícia</strong></p>
                    <p className="m-0 text-muted d-inline">Descrição...<span> - 00/00/0000</span></p>
                </div>
            </div>
            <hr className="m-0" />
        </div>
    )
}


export default News;