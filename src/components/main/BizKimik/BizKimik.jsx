import React from 'react'
import "./BizKimik.css"
import codnest from "../../img/codnestLogo.jpg"
import { Link } from 'react-router-dom'

function BizKimik() {
    return (
        <div className='bizKimik'>
            <div className="bKContainer">
                <div className="bizKimikImg"><img src={codnest} alt="" /></div>
                <div className="bizKimikText">
                    <div className="textPadding">
                        <h1>Biz kimik?</h1>
                        <p>Biz, web saytlarının hazırlanması və dijital dünyada güclü bir varlıq yaratma sahəsində mükəmməl təcrübəyə sahib bir şirkətik.
                            Biz, müştərilərimizin tələblərinə və iş sahələrinə uyğun özəl web saytlarının və veb tətbiqlərinin yaradılması üçün təchizatlı bir komandayıq. Sizin saytınız, şirkətinizin şəxsiyyətinə, məqsəd və istiqamətinə tam uyğun gələcək və müştərilərinizə gözəl bir təcrübə təmin edəcəyik.
                            Biz, hər bir müştəriyə fərdi yanaşma tətbiq edirik və onların özünü ifadə etmələrinə kömək edirik. Saytlarımız istifadəçilər üçün intuitiv və işıqlıdır, və müştərilərimizin bizimlə çalışmağının nə qədər asan və effektiv olduğunu vurğulamaqdan məmnunluq duyuruq.
                        </p>
                        <Link to="/about">
                        <div className='loadMore'>
                            <p>Daha Ətraflı →</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BizKimik