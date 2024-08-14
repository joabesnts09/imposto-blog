import Image from 'next/image'
import style from './style.module.scss'
import { Gupter } from 'next/font/google'
import imageBanner from '../../../../public/images/imgFundo1.jpg'

const roboto_mono = Gupter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--gupter-font',
})

export const MainComponent = () => {
    return (
        <>
            <article className={style.boxContainer}>
                <section className={style.boxTitle}>
                    <h1>Impostos: Como Declarar e Pagar Menos Legalmente</h1>

                    <p className={`${roboto_mono.className}`}>
                        Declarar impostos pode ser uma tarefa complexa e, para
                        muitos, um dos momentos mais temidos do ano. No entanto,
                        com um pouco de planejamento e o uso de estratégias
                        legais, é possível pagar menos impostos e maximizar as
                        deduções permitidas. Este artigo oferece dicas práticas
                        sobre como declarar seus impostos de maneira eficiente e
                        minimizar sua carga tributária sem infringir a lei.
                    </p>

                    <Image
                        src={imageBanner}
                        alt='Illustrative Image'
                        priority
                    />
                </section>

                <section className={style.boxContent}>
                    <ul className={style.listItems}>
                        <li>
                            <h2>
                                1. Organize Suas Finanças Durante Todo o Ano
                            </h2>
                            <p className={`${roboto_mono.className}`}>
                                A chave para pagar menos impostos começa com a
                                organização. Mantenha um registro detalhado de
                                todas as suas despesas, receitas e doações ao
                                longo do ano. Utilize aplicativos ou planilhas
                                para categorizar suas despesas e garantir que
                                você não perca nenhuma dedução potencial. Quando
                                o período de declaração chegar, você estará
                                preparado e não precisará correr atrás de
                                recibos ou documentos faltantes.
                            </p>
                        </li>
                        <li>
                            <h2>2. Aproveite as Deduções Fiscais Permitidas</h2>
                            <p className={`${roboto_mono.className}`}>
                                As deduções fiscais são uma excelente maneira de
                                reduzir a quantidade de impostos que você deve.
                                Verifique se você se qualifica para deduções
                                comuns, como despesas médicas, juros de
                                hipoteca, contribuições para caridade, e
                                despesas com educação. Além disso, contribuições
                                para planos de previdência privada, como um PGBL
                                ou VGBL, podem ser deduzidas dentro de certos
                                limites, diminuindo assim sua base de cálculo do
                                imposto de renda.
                            </p>
                        </li>

                        <li>
                            <h2>
                                3. Use as Isenções e Abatimentos a Seu Favor
                            </h2>
                            <p className={`${roboto_mono.className}`}>
                                O governo oferece várias isenções e abatimentos
                                que podem reduzir sua base de cálculo de
                                impostos. Por exemplo, rendimentos provenientes
                                de aplicações financeiras em poupança são
                                isentos de imposto de renda. Além disso, pessoas
                                com dependentes podem ter direito a um
                                abatimento no imposto devido. Certifique-se de
                                entender todas as isenções e abatimentos
                                disponíveis para sua situação.
                            </p>
                        </li>

                        <li>
                            <h2>4. Invista em Educação e Qualificação</h2>
                            <p className={`${roboto_mono.className}`}>
                                Despesas com educação, tanto sua quanto de seus
                                dependentes, podem ser deduzidas até um
                                determinado limite. Cursos de graduação,
                                pós-graduação, MBA e até cursos de idiomas ou
                                técnicos podem se qualificar. Além de melhorar
                                suas qualificações, essa estratégia também reduz
                                a quantidade de imposto que você deve.
                            </p>
                        </li>

                        <li>
                            <h2>
                                5. Faça Contribuições para a Previdência Privada
                            </h2>
                            <p className={`${roboto_mono.className}`}>
                                Contribuições para certos tipos de previdência
                                privada podem ser deduzidas do seu imposto de
                                renda. Um exemplo é o PGBL (Plano Gerador de
                                Benefício Livre), que permite deduzir até 12% de
                                sua renda bruta tributável. Isso não apenas
                                diminui o imposto a pagar, mas também ajuda a
                                planejar a aposentadoria.
                            </p>
                        </li>

                        <li>
                            <h2>6. Revise Sua Declaração com Atenção</h2>
                            <p className={`${roboto_mono.className}`}>
                                Erros na declaração de impostos podem custar
                                caro, seja em multas, juros, ou na perda de
                                deduções valiosas. Antes de enviar sua
                                declaração, revise todos os campos
                                cuidadosamente. Verifique se todas as receitas
                                foram declaradas e se todas as deduções
                                aplicáveis foram incluídas. Se possível, utilize
                                um software de declaração de impostos que
                                automatize boa parte desse processo e minimize
                                os riscos de erro.
                            </p>
                        </li>

                        <li>
                            <h2>7. Considere Contratar um Contador</h2>
                            <p className={`${roboto_mono.className}`}>
                                Se sua situação financeira é complexa, talvez
                                seja interessante contratar um contador.
                                Profissionais experientes podem ajudar a
                                identificar deduções que você talvez não conheça
                                e garantir que sua declaração seja feita
                                corretamente. Eles também podem oferecer
                                conselhos sobre como estruturar suas finanças
                                para reduzir a carga tributária no futuro.
                            </p>
                        </li>

                        <li>
                            <h2>8. Planeje Suas Doações de Caridade</h2>
                            <p className={`${roboto_mono.className}`}>
                                Doações para instituições de caridade podem ser
                                deduzidas do imposto de renda, desde que a
                                instituição seja reconhecida pelo governo.
                                Planeje suas doações e guarde todos os
                                comprovantes para maximizar essa dedução. Essa é
                                uma maneira de apoiar causas importantes e, ao
                                mesmo tempo, reduzir o valor dos impostos que
                                você deve.
                            </p>
                        </li>

                        <li>
                            <h2>9. Invista em Fundos de Ações Incentivados</h2>
                            <p className={`${roboto_mono.className}`}>
                                Alguns investimentos, como Fundos de Ações
                                Incentivados, têm isenção de Imposto de Renda
                                sobre o ganho de capital. Embora esses fundos
                                possam ter maior risco, eles também oferecem um
                                benefício fiscal que pode ser atraente para quem
                                busca reduzir a carga tributária.
                            </p>
                        </li>

                        <li>
                            <h2>10. Atualize-se com a Legislação</h2>
                            <p className={`${roboto_mono.className}`}>
                                As leis fiscais mudam frequentemente, e o que
                                era válido em um ano pode não ser no próximo.
                                Mantenha-se informado sobre as mudanças na
                                legislação fiscal que podem afetar sua
                                declaração. Isso pode incluir novas deduções,
                                mudanças nas alíquotas de imposto ou alterações
                                nas regras para investimentos.
                            </p>
                        </li>
                    </ul>
                    <div className={style.sf}>
                        <h3>Conclusão</h3>
                        <p>
                            Pagar menos impostos legalmente exige planejamento,
                            organização e uma boa compreensão das deduções e
                            isenções disponíveis. Ao seguir as dicas acima, você
                            pode reduzir sua carga tributária e garantir que
                            está aproveitando ao máximo os benefícios fiscais
                            permitidos. Lembre-se sempre de que a conformidade
                            com as leis fiscais é fundamental; busque orientação
                            profissional se necessário para evitar problemas
                            futuros com o fisco.
                        </p>
                    </div>
                </section>
            </article>
        </>
    )
}
