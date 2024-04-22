import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import {
  ImageRestaurant,
  InfoForm,
  UploadImagesForm,
} from "../../../components/Restaurants/AddRestaurant";
import { db } from "../../../utils/firebase";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";
import { styles } from "./AddRestaurantScreen.styles";

export function AddRestaurantScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue();
        newData.id = uuid();
        newData.createdAt = new Date();

        await setDoc(doc(db, "restaurants", newData.id), newData);

        navigation.goBack();

        console.log(newData);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik} />
      {/* <Text>AddRestaurantScreen</Text> */}
      <InfoForm formik={formik} />

      <UploadImagesForm formik={formik} />

      <Button
        title="Crear restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      ></Button>
    </ScrollView>
  );
}
