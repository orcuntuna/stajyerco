import React from "react";

export default class TabPersonal extends React.Component {
    render() {
        return (
            <div className="tab-personal">
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet dui lacus, vel tristique dolor pretium vel. Sed fringilla ligula ac lectus consectetur varius. Phasellus et tempor tellus. Donec pharetra, sem vitae maximus scelerisque, quam mi lobortis lectus, in molestie metus urna id magna. Etiam interdum congue leo, a hendrerit ex consequat nec. Quisque ut convallis odio. Aenean sem nisi, maximus sit amet pulvinar non, cursus ut elit. Quisque ac imperdiet ex, ut porta nulla. In sagittis magna nec ipsum congue commodo. Sed sagittis ante id purus viverra eleifend. Maecenas nulla velit, blandit in lobortis nec, aliquam quis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget diam bibendum, efficitur quam nec, fringilla lacus. Suspendisse cursus neque metus, vel placerat tellus dignissim sagittis. Donec sit amet mauris ac velit hendrerit blandit sed a diam.</p>
                    <ul className="other-info">
                        <li><b>Yabancı Diller:</b> İngilizce (4/5), İspanyolca (2/5)</li>
                        <li><b>Uyruk:</b> Türkiye Cumhuriyeti</li>
                        <li><b>Cinsiyet:</b> Erkek</li>
                        <li><b>Sürücü Belgesi:</b> B Tipi</li>
                        <li><b>Askerlik Durumu:</b> Yapılmadı</li>
                        <li><b>Engellilik Durumu:</b> Yok</li>
                    </ul>
                </div>
            </div>
        );
    }
}
