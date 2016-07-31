import React from 'react';

const FoodList = React.createClass({
    render() {
        return (
                    <div>
        <section className="demo">
          <dl className="list nigiri">
            <dt>Nigiri</dt>
            <dd><a href="#" className="makisu_a">Maguro</a></dd>
            <dd><a href="#" className="makisu_a">Sake</a></dd>
            <dd><a href="#" className="makisu_a">Unagi</a></dd>
            <dd><a href="#" className="makisu_a">Buri</a></dd>
            <dd><a href="#" className="makisu_a">Suzuki</a></dd>
            <dd><a href="#" className="makisu_a">Saba</a></dd>
            <dd><a href="#" className="makisu_a">Iwashi</a></dd>
            <dd><a href="#" className="makisu_a">Kohada</a></dd>
            <dd><a href="#" className="makisu_a">Hirame</a></dd>
            <dd><a href="#" className="makisu_a">Tobiwo</a></dd>
          </dl>
          <dl className="list maki">
            <dt>Maki</dt>
            <dd><a href="#" className="makisu_a">Ana-kyu</a></dd>
            <dd><a href="#" className="makisu_a">Chutoro</a></dd>
            <dd><a href="#" className="makisu_a">Kaiware</a></dd>
            <dd><a href="#" className="makisu_a">Kampyo</a></dd>
            <dd><a href="#" className="makisu_a">Kappa</a></dd>
            <dd><a href="#" className="makisu_a">Natto</a></dd>
            <dd><a href="#" className="makisu_a">Negitoro</a></dd>
            <dd><a href="#" className="makisu_a">Oshinko</a></dd>
            <dd><a href="#" className="makisu_a">Otoro</a></dd>
            <dd><a href="#" className="makisu_a">Tekka</a></dd>
          </dl>
          <dl className="list sashimi">
            <dt>Sashimi</dt>
            <dd><a href="#" className="makisu_a">Maguro</a></dd>
            <dd><a href="#" className="makisu_a">Toro</a></dd>
            <dd><a href="#" className="makisu_a">Ebi</a></dd>
            <dd><a href="#" className="makisu_a">Saba</a></dd>
            <dd><a href="#" className="makisu_a">Ika</a></dd>
            <dd><a href="#" className="makisu_a">Tako</a></dd>
            <dd><a href="#" className="makisu_a">Tomago</a></dd>
            <dd><a href="#" className="makisu_a">Kani</a></dd>
            <dd><a href="#" className="makisu_a">Katsuo</a></dd>
            <dd><a href="#" className="makisu_a">Maguro</a></dd>
          </dl>
          <a href="#" className="toogle">Toggle</a>
        </section>

      </div>
        );
    }
});

export default FoodList