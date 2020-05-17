import React from 'react';
import Page from '../templates/Page';
import MetaTags from 'react-meta-tags';
import Main from '../layouts/Main';
import Button from '../components/Button';

class About extends React.Component {
  render() {
    return (
      <Page>
        <MetaTags>
          <title>About</title>
          <meta name="description" content="Some description." />
        </MetaTags>
        <Main>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Volutpat diam ut venenatis tellus in metus vulputate. Enim nec dui nunc mattis enim ut tellus. Facilisis volutpat est velit egestas dui id ornare arcu odio. Pharetra sit amet aliquam id diam maecenas. Odio ut enim blandit volutpat maecenas volutpat. Faucibus purus in massa tempor. Convallis aenean et tortor at risus. Lobortis scelerisque fermentum dui faucibus in. Quisque sagittis purus sit amet volutpat consequat mauris nunc. At tellus at urna condimentum mattis pellentesque id nibh. Purus in massa tempor nec feugiat nisl pretium fusce id. Malesuada proin libero nunc consequat interdum varius sit. Quam viverra orci sagittis eu volutpat odio facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci.</p>
          <p>Tellus id interdum velit laoreet id donec ultrices tincidunt. Ultrices dui sapien eget mi proin sed. Nisi lacus sed viverra tellus in hac habitasse platea. Facilisis gravida neque convallis a. Et pharetra pharetra massa massa ultricies mi quis. Bibendum est ultricies integer quis auctor. Phasellus egestas tellus rutrum tellus pellentesque eu. Nisi est sit amet facilisis magna etiam tempor. Facilisis gravida neque convallis a cras semper auctor. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Lacinia quis vel eros donec ac. Ornare lectus sit amet est placerat in. Mus mauris vitae ultricies leo integer malesuada nunc vel. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Pharetra vel turpis nunc eget lorem dolor sed viverra. Ullamcorper malesuada proin libero nunc consequat. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Nec tincidunt praesent semper feugiat nibh sed. Cursus eget nunc scelerisque viverra mauris in aliquam.</p>
          <p>Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Fames ac turpis egestas maecenas pharetra convallis posuere. Odio morbi quis commodo odio aenean. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Nunc sed blandit libero volutpat sed cras. Ullamcorper eget nulla facilisi etiam dignissim diam. Duis convallis convallis tellus id interdum. Molestie nunc non blandit massa enim nec dui. Accumsan tortor posuere ac ut consequat semper viverra nam. Neque laoreet suspendisse interdum consectetur libero id faucibus. Senectus et netus et malesuada fames ac. Dui sapien eget mi proin sed libero enim sed faucibus. Id diam maecenas ultricies mi eget mauris. Non sodales neque sodales ut etiam sit amet. Convallis a cras semper auctor neque vitae tempus quam. Nunc faucibus a pellentesque sit amet porttitor eget dolor.</p>
          <p>Nisi quis eleifend quam adipiscing vitae proin. Orci dapibus ultrices in iaculis nunc sed. Eget nunc lobortis mattis aliquam faucibus. Id nibh tortor id aliquet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Ut diam quam nulla porttitor massa id neque aliquam. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Egestas sed sed risus pretium. Tortor id aliquet lectus proin nibh nisl condimentum id. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Molestie a iaculis at erat. Vel pretium lectus quam id leo in vitae turpis massa. Egestas tellus rutrum tellus pellentesque eu tincidunt. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pharetra convallis posuere morbi leo urna molestie. Nec nam aliquam sem et. Nisl pretium fusce id velit ut. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Malesuada nunc vel risus commodo.</p>
          <p>Mauris in aliquam sem fringilla ut. Id aliquet lectus proin nibh nisl condimentum id venenatis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Mauris pellentesque pulvinar pellentesque habitant morbi. Gravida neque convallis a cras semper. Feugiat pretium nibh ipsum consequat nisl. Condimentum mattis pellentesque id nibh tortor id. Egestas erat imperdiet sed euismod nisi porta. Quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Blandit massa enim nec dui.</p>
          <p><Button label="Read More" href="#" /></p>
        </Main>
      </Page>
    );
  }
}

export default About;
