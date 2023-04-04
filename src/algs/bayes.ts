import data from "../assets/bayes.json";
import Bayes from "bayes-classifier";

const positive = data.filter((row) => row.s === 1);
const nagative = data.filter((row) => row.s === 0);
const positiveDocuments = positive.map((row) => row.t);
const negativeDocuments = nagative.map((row) => row.t);

const classifier = new Bayes();
classifier.addDocuments(positiveDocuments, "p");
classifier.addDocuments(negativeDocuments, "n");

classifier.train();

export const predict = (text: string) => {
  return {
    value: classifier.classify(text),
    stats: classifier.getClassifications(text),
  };
};
