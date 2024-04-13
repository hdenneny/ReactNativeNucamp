import { Card, Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const ContactScreen = () => {
    return (
        <ScrollView>
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
        </ScrollView>
    )
}

export default ContactScreen;