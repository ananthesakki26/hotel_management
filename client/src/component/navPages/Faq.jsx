import React from 'react'
import { Accordion, Container } from "react-bootstrap";

export default function Faq() {
    const faqs = [
    {
      question: "How do I book a room?",
      answer:
        "You can book a room online via our website by selecting your dates, room type, and completing the payment process.",
    },
    {
      question: "What amenities are included?",
      answer:
        "All rooms include free Wi-Fi, air conditioning, TV, and complimentary toiletries. Some rooms have additional amenities like a mini-fridge or balcony.",
    },
    {
      question: "Do you offer airport pickup?",
      answer:
        "Yes, airport pickup is available upon request. Please contact our support team to arrange it in advance.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards, debit cards, UPI payments, and PayPal.",
    },
    {
      question: "How to contact hotel support?",
      answer:
        "You can contact our support via the Contact page, email, or by calling our hotline number provided on the website.",
    },
  ];
  return (
    <div>
      <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ fontFamily: "Acme, sans-serif" }}>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
    </div>
  )
}
