import { Card } from "react-native-elements";
import { Text, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'

const ContactScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
                <Card wrapperStyle={{margin:20}}>
                    <Card.Title>
                        Contact Information
                    </Card.Title>
                    <Card.Divider />
                    <Text>
                        1 Nucamp Way {'\n'}
                        Seattle, WA 98001{'\n'}
                        U.S.A.{'\n'}{'\n'}
                        Phone: 1-206-555-1234{'\n'}
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    )
}

export default ContactScreen;