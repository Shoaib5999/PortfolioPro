import { Form, Input, Button, message } from "antd";
import { Send as SendIcon, LocationOn as EnvironmentIcon, Phone as PhoneIcon, Mail as MailIcon } from "@mui/icons-material";
import React from "react";
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Message sent successfully! I will get back to you soon.");
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <EnvironmentIcon className="text-2xl text-blue-500" />,
      title: "Location",
      details: "Your City, Country",
    },
    {
      icon: <PhoneIcon className="text-2xl text-blue-500" />,
      title: "Phone",
      details: "+1 (123) 456-7890",
    },
    {
      icon: <MailIcon className="text-2xl text-blue-500" />,
      title: "Email",
      details: "contact@example.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
                <Input size="large" placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="Your Email" />
              </Form.Item>

              <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
                <Input size="large" placeholder="Subject" />
              </Form.Item>

              <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}>
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="bg-blue-500 hover:bg-blue-600 flex items-center" icon={<SendIcon />}>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400">Don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="space-y-6 mt-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
