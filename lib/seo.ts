import { Course, Webinar, EBook, Speaker } from './types';

export const SITE_URL = 'https://aurosiksha.org';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Aurosiksha',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Digital learning ecosystem and integrated LMS built specifically for eye-care professionals, allied ophthalmic personnel, educators, and eye-care institutions.',
    sameAs: [
      'https://www.facebook.com/aurosiksha',
      'https://twitter.com/aurosiksha',
      'https://www.linkedin.com/company/aurosiksha'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India'
    }
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aurosiksha Eye-Care Learning Ecosystem',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/learn/courses?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.shortDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Aurosiksha',
      sameAs: SITE_URL
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor.name,
      jobTitle: course.instructor.role,
      worksFor: {
        '@type': 'Organization',
        name: course.instructor.institution
      }
    },
    educationalLevel: course.level,
    about: course.topics,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.duration
    }
  };
}

export function generateEventSchema(webinar: Webinar) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: webinar.title,
    description: webinar.description,
    startDate: '2026-09-18T18:30:00+05:30',
    endDate: '2026-09-18T20:00:00+05:30',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: `${SITE_URL}/learn/webinars/${webinar.slug}`
    },
    organizer: {
      '@type': 'EducationalOrganization',
      name: 'Aurosiksha',
      url: SITE_URL
    },
    performer: {
      '@type': 'Person',
      name: webinar.speaker.name,
      jobTitle: webinar.speaker.role
    }
  };
}

export function generateBookSchema(ebook: EBook) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: ebook.title,
    author: {
      '@type': 'Organization',
      name: ebook.author
    },
    description: ebook.description,
    numberOfPages: ebook.pagesCount,
    inLanguage: 'en',
    publisher: 'Aurosiksha Publishing'
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
