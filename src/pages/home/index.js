export default () => {
    const container = document.createElement('div')

    const template = `
    <h2>We Really love cats</h2>
    <p> "Admiro demais os gatos. Gosto da coragem que eles tem em assumir riscos. Do jogo de cintura e da flexibilidade para superar desafios. Me fascina a sensação de liberdade e autenticidade que transmitem. De forma alguma vejo neles traição. Talvez seleção. Não fazem ‘graça gratuita’.
    Quando amam, AMAM. Quando não amam, simplesmente ignoram.
    E saem de cena, sutilmente..."</p>
    <h3> I'm not Sorry: Poems by Cats</h3>
    <p>by Tainah Ferreira</p>
    `
    container.innerHTML = template
    
    return container
}