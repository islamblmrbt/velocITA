import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignIn = () => {
    const [form, setForm] = useState({
            name: "",
            email: "",
            password: ""
        });
    
        const onSignInPress = async () => {
    
        }
    return (
        <ScrollView
            className="flex-1 bg-white"
        >
            <View
                className="flex-1 bg-white"
            >
                <View
                    className="relative w-full h-[250px]"
                >
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text
                        className="text-2xl text-black font-JakartaSemiBold 
                    absolute bottom-5 left-5"
                    >
                        Create Your Account
                    </Text>
                </View>
                <View
                    className="p-5"
                >
                    <InputField
                        label="Name"
                        placeholder="Enter Your Name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                        labelStyle="" />
                    <InputField
                        label="Email"
                        placeholder="Enter Your Email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                        labelStyle="" />
                    <InputField
                        label="Password"
                        placeholder="Enter Your Password"
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                        labelStyle=""
                        secureTextEntry={true}
                    />
                    <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6"/>

                    <OAuth />

                    <Link href="/sign-up"
                    className="text-lg text-center text-general-200 mt-10"
                    >
                        <Text>
                            Don't Have an Account?
                        </Text>
                        <Text
                        className="text-primary-500"
                        >
                            {" Sign Up"}
                        </Text>
                    </Link>
                </View>
                {/* verification modal */}
            </View>
        </ScrollView>
    )
}

export default SignIn;