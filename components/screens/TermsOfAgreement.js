import React, {Component} from 'react';
import HelpFooter from "../includes/HelpFooter";
import Wrapper from "../helpers/Wrapper";
import {Text, StyleSheet} from "react-native";
import {COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";

class TermsOfAgreement extends Component {
    render() {
        const {navigation, route} = this.props;
        const {currentPage} = route.params;
        return (
            <Wrapper
                withContainer
                header={{
                    currentPage,
                    home: true,
                    navigation
                }}
            >
                <Text style={styles.text} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi odit quisquam quod. Aperiam
                    architecto aspernatur atque beatae consequatur deleniti dolorem doloremque ea eligendi error fuga
                    illum impedit ipsa ipsum, labore laborum laudantium molestiae mollitia natus nemo non nulla quisquam
                    quos ratione repellendus sapiente soluta totam ut voluptate voluptatem? Amet architecto aspernatur
                    commodi consequatur consequuntur dolore dolorem earum eius est eveniet id in incidunt labore
                    laudantium magnam minima, modi obcaecati pariatur perspiciatis quasi ratione, sequi tenetur velit
                    veritatis voluptates. Accusantium amet aperiam aspernatur assumenda blanditiis deleniti deserunt
                    dolorum exercitationem fugit ipsam ipsum libero modi molestiae necessitatibus non obcaecati odio
                    officiis placeat provident quae quaerat quasi, qui quidem quos reiciendis rem repellat saepe sint
                    sunt suscipit tempore ut vero voluptates. A aliquam aperiam aut blanditiis commodi corporis error
                    eveniet fugiat in ipsam ipsum iste itaque iusto, labore laboriosam magnam maiores necessitatibus
                    nemo non obcaecati omnis quaerat, qui quibusdam quidem sed temporibus unde vero! Ad adipisci amet
                    aut beatae dolore dolorem dolores explicabo ipsum iste, itaque neque odit praesentium quos
                    reiciendis, repudiandae totam voluptate! Architecto aspernatur aut autem cupiditate deserunt eius
                    neque soluta ullam voluptas. Cum iure laboriosam soluta totam. Ab accusamus accusantium amet autem
                    beatae corporis deleniti deserunt distinctio dolor doloremque dolorum eaque eligendi esse et eveniet
                    excepturi, facilis hic in incidunt laboriosam mollitia necessitatibus nihil nisi optio praesentium
                    quas quia quis quos reiciendis repellat similique sint velit vitae? A architecto autem commodi,
                    consequuntur dolores dolorum error est exercitationem explicabo incidunt inventore labore molestias
                    non nostrum nulla numquam obcaecati perspiciatis porro quidem quisquam quos reiciendis sunt tempora
                    vel voluptatem? Doloribus fugit ipsam nesciunt quod saepe tempore? Alias, atque consectetur deserunt
                    dolorem eaque eius enim eos in, nisi officia omnis optio perferendis sint tenetur ullam ut
                    veritatis. Ab adipisci aliquid assumenda consequatur culpa, dolores eaque eius error exercitationem
                    facilis hic id illum iste laboriosam magnam minus modi mollitia nesciunt omnis perspiciatis quasi
                    qui quo reiciendis repellat saepe sunt tempora velit veniam veritatis voluptatum. Cumque dolores
                    eligendi explicabo iste nulla officiis quam? Dolores reiciendis repellat repellendus suscipit
                    voluptas. Ab cupiditate laboriosam laudantium minus odio optio, possimus praesentium quidem, quo rem
                    repellendus tenetur ullam vel veritatis voluptatibus. Ab architecto asperiores delectus iure,
                    ratione recusandae repudiandae! Architecto asperiores eum ipsa, ipsum numquam praesentium quisquam
                    sapiente sunt voluptate! Alias laboriosam numquam quibusdam quos sed sunt. Aliquid architecto
                    corporis eligendi est facere laboriosam maxime mollitia nam quia quisquam, repellat reprehenderit
                    sed? Aliquam assumenda autem cum cupiditate delectus doloribus eos id in itaque, laudantium modi
                    molestiae placeat quo, reiciendis repellendus vel voluptatibus? Aspernatur aut commodi consequuntur
                    dicta distinctio eum, facilis laboriosam laborum laudantium non numquam odit qui quibusdam sint
                    soluta ullam ut veniam vitae voluptatem voluptates? Adipisci atque consequuntur dicta dolorum
                    ducimus ea ex iure laboriosam natus necessitatibus, nihil odit quia quisquam rem temporibus
                    voluptate voluptates. Accusamus alias aliquid animi at, aut beatae commodi consequatur distinctio
                    doloremque dolorum earum eos esse eum expedita, hic iste laboriosam numquam officia optio pariatur
                    possimus quia sequi totam ullam veniam vero vitae. Aliquid aperiam consectetur consequatur
                    consequuntur cupiditate dignissimos doloremque enim eum necessitatibus non nulla, officia quaerat,
                    quo quos repellat rerum sed. Adipisci animi aperiam commodi cum deserunt dicta dolores, eos expedita
                    ipsa iste laboriosam, neque non odio odit pariatur perferendis provident qui reiciendis
                    reprehenderit saepe sit voluptate voluptates. Accusantium alias aliquid architecto eveniet illum
                    impedit molestias officiis sed velit voluptatum! Aliquid amet cumque fugiat ipsam itaque labore
                    maxime minima minus nisi nostrum numquam officia officiis perferendis porro provident, rem,
                    repudiandae sapiente voluptas? Ab amet culpa dolorem iste, minus, nobis numquam officia omnis
                    perspiciatis sapiente sint tempore tenetur totam. Consectetur deserunt eligendi ipsam praesentium
                    quibusdam quod sint ullam! Aut deleniti dolorem eius inventore labore modi quisquam soluta
                    veritatis. Accusamus aperiam asperiores commodi consequuntur distinctio dolor dolorem earum et
                    exercitationem fugiat illo molestiae neque nesciunt nobis officia pariatur porro quam quis quos
                    repellendus sit tempora, veritatis vitae. Animi asperiores assumenda consectetur consequuntur cumque
                    debitis, doloribus, eos exercitationem ipsa iure minima natus nemo optio quasi quisquam ratione
                    repellendus repudiandae sint ut voluptas! Ad at aut delectus dolor esse explicabo, id illum, iste
                    labore nemo nobis numquam pariatur perferendis quia quidem suscipit veritatis vitae. Accusamus
                    asperiores aspernatur corporis dignissimos dolore dolorem dolorum, eaque eligendi enim esse eum
                    excepturi id illum iure laborum libero minus nostrum pariatur provident qui quo reiciendis, rem
                    rerum saepe sapiente sint tempore veniam! Adipisci aliquam corporis cupiditate dolore doloremque
                    dolorum enim error et eum expedita in ipsa iusto libero maxime modi necessitatibus nemo nulla
                    numquam odit perspiciatis quam quibusdam repellat saepe, sit tenetur, totam unde ut velit veniam
                    vero? At culpa cumque dolore dolores enim eos est eum explicabo facilis, fuga in iste libero magnam
                    maxime nam nulla omnis provident qui quibusdam quis quos ratione repellat sapiente ullam unde velit
                    veritatis voluptas voluptatem voluptates voluptatibus! Dolorum magnam minus officia, quibusdam sequi
                    sint sunt unde ut? At deserunt laudantium reiciendis! Alias beatae consequuntur deleniti dignissimos
                    dolor dolores eaque enim ex fugit id, laudantium modi natus nobis nostrum odio officia perferendis
                    quibusdam quidem, rem repudiandae sapiente sunt tempore totam vel voluptatum. Autem culpa distinctio
                    ducimus eveniet hic iure officia totam vitae. Aperiam beatae corporis fugiat in molestiae nesciunt
                    nihil placeat repellat sed suscipit. Doloremque ducimus fugit quo suscipit vero! Accusamus ad
                    adipisci corporis, ducimus ea enim excepturi explicabo facilis hic id incidunt minima odio officiis,
                    recusandae rem sapiente sequi ut, voluptatem. Ab aliquid architecto at atque beatae blanditiis cum
                    deserunt dicta distinctio dolorum ea eos expedita facere fuga fugiat harum illo, ipsa magni, maxime
                    neque non officiis porro praesentium quibusdam quidem quisquam quo quod rem rerum saepe sed sequi
                    sint tempora. Cum deserunt ipsum quos. A accusantium alias aliquid amet consectetur, cum dicta
                    dolore eaque fugit illum in natus nisi omnis perferendis provident quaerat ratione tempore vero
                    voluptas voluptatibus. Ab architecto aspernatur beatae dolore, dolorum eligendi eveniet expedita
                    facilis fuga illum impedit ipsum maxime nam necessitatibus nobis nostrum reiciendis saepe sed
                    tenetur velit. Asperiores consequuntur cumque dicta eaque eius eos illum, itaque laudantium libero
                    molestiae nam nemo nesciunt nihil nobis non placeat quaerat quam quasi repellendus sed similique
                    tempora, tempore totam unde voluptas voluptate?
                </Text>
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        paddingHorizontal: WRAPPER_PADDINGS,
        color: COLOR_9,
        marginBottom: 30
    }
});

export default TermsOfAgreement;
