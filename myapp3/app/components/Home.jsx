import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';
import List from 'reapp-ui/components/List';

class Home extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="myapp3">
          <p>Hello, World!</p>

          <Button onTap={() => this.router().transitionTo('sub')}>
            Go to sub view
          </Button>

          <Button onTap={() => this.router().transitionTo('sub')}>
          Go to sub view
        </Button>

        

        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/