function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            QR Code 1
          </Text>
        }
      >
        <Toggle settingsKey="enabled1" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image1"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content1" />
        <TextInput title="Label" label="Label" settingsKey="label1" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel1"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 2
          </Text>
        }
      >
        <Toggle settingsKey="enabled2" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image2"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content2" />
        <TextInput title="Label" label="Label" settingsKey="label2" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel2"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 3
          </Text>
        }
      >
        <Toggle settingsKey="enabled3" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image3"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content3" />
        <TextInput title="Label" label="Label" settingsKey="label3" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel3"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 4
          </Text>
        }
      >
        <Toggle settingsKey="enabled4" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image4"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content4" />
        <TextInput title="Label" label="Label" settingsKey="label4" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel4"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 5
          </Text>
        }
      >
        <Toggle settingsKey="enabled5" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image5"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content5" />
        <TextInput title="Label" label="Label" settingsKey="label5" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel5"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 6
          </Text>
        }
      >
        <Toggle settingsKey="enabled6" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image6"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content6" />
        <TextInput title="Label" label="Label" settingsKey="label6" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel6"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 7
          </Text>
        }
      >
        <Toggle settingsKey="enabled7" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image7"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content7" />
        <TextInput title="Label" label="Label" settingsKey="label7" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel7"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 8
          </Text>
        }
      >
        <Toggle settingsKey="enabled8" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image8"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content8" />
        <TextInput title="Label" label="Label" settingsKey="label8" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel8"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 9
          </Text>
        }
      >
        <Toggle settingsKey="enabled9" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image9"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content9" />
        <TextInput title="Label" label="Label" settingsKey="label9" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel9"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            QR Code 10
          </Text>
        }
      >
        <Toggle settingsKey="enabled10" label="Enabled" />
        <ImagePicker
          title="QR image"
          description="Pick an image to use as a QR code."
          label="Import QR code from image"
          sublabel="...or generate it from text content below"
          settingsKey="image10"
          imageWidth={200}
          imageHeight={200}
        />
        <TextInput title="Content" label="Content" settingsKey="content10" />
        <TextInput title="Label" label="Label" settingsKey="label10" />
        <Select
          title="Error Correction Level"
          label="Error Correction Level"
          settingsKey="errorCorrectionLevel10"
          options={[
            { name: "High", value: "H" },
            { name: "Medium-High", value: "Q" },
            { name: "Medium-Low", value: "M" },
            { name: "Low", value: "L" },
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
