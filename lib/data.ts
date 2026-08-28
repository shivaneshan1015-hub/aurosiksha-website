import { Speaker, Course, Webinar, SikshaBite, AopRole, Resource, EBook, Article, Competency } from './types';

export const SPEAKERS: Record<string, Speaker> = {
  dr_aravind: {
    id: 'dr_aravind',
    name: 'Dr. R. Aravind',
    role: 'Senior Pediatric Ophthalmologist & Educator',
    institution: 'Aravind Eye Care System',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    bio: 'Pioneer in community eye health and competency-based training for allied ophthalmic personnel with 25+ years of clinical and academic teaching experience.',
    credentials: 'MS (Ophthal), FICO, FRCS'
  },
  dr_meenakshi: {
    id: 'dr_meenakshi',
    name: 'Dr. Meenakshi Swaminathan',
    role: 'Head of Pediatric Cornea & Refraction',
    institution: 'Sankara Nethralaya',
    avatar: 'https://images.unsplash.com/photo-1594824813566-88855ce78947?auto=format&fit=crop&q=80&w=400',
    bio: 'Specialist in refractive errors, binocular vision anomalies, and hands-on skill evaluation rubrics for refractionists.',
    credentials: 'DO, DNB (Ophthal)'
  },
  prof_kalpana: {
    id: 'prof_kalpana',
    name: 'Prof. Kalpana Suresh',
    role: 'Director of Allied Ophthalmic Studies',
    institution: 'Aurosiksha Learning Institute',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    bio: 'Lead author of AOP competency framework standardizing training for optometrists, refractionists, and OT assistants across South Asia.',
    credentials: 'M.Optom, PhD (Visual Sciences)'
  },
  dr_rajesh: {
    id: 'dr_rajesh',
    name: 'Dr. Rajesh Kumar',
    role: 'Senior Vitreoretinal Surgeon & Clinical Educator',
    institution: 'LV Prasad Eye Institute',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in retinal imaging, diagnostic OCT interpretation, and digital diagnostic workflows for ophthalmic technicians.',
    credentials: 'MS, FVRS, FICO'
  }
};

export const COURSES: Course[] = [
  {
    id: 'course-1',
    slug: 'clinical-refraction-techniques-mastery',
    title: 'Clinical Refraction Techniques & Subjective Testing Mastery',
    shortDescription: 'Master retinoscopy, cross-cylinder astigmatic refined testing, binocular balancing, and prescribing for complex refractive errors.',
    fullDescription: 'This comprehensive competency-driven course is designed for Refractionists, Optometrists, and Vision Technicians seeking clinical perfection in subjective and objective refraction. Learners gain step-by-step mastery over streak retinoscopy, fogging techniques, Jackson Cross-Cylinder (JCC) axis and power refinement, and binocular subjective balancing.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    level: 'Intermediate',
    duration: '6 Weeks (Self-Paced)',
    instructor: SPEAKERS.prof_kalpana,
    targetRoles: ['Refractionist', 'Optometrist', 'Vision Technician'],
    topics: ['Refraction', 'Optometry', 'Pediatric Refraction', 'Binocular Vision'],
    rating: 4.9,
    enrolledCount: 1420,
    certificateAvailable: true,
    learningObjectives: [
      'Perform accurate streak retinoscopy in adults and pediatric uncooperative patients.',
      'Utilize Jackson Cross Cylinder for precision cylinder power and axis refinement within ±0.25D.',
      'Apply binocular subjective balancing techniques including duochrome and prism dissociation.',
      'Troubleshoot patient discomfort with high astigmatism and presbyopic add adjustments.'
    ],
    prerequisites: ['Basic ocular anatomy', 'Understanding of geometric optics'],
    relatedBiteIds: ['bite-1', 'bite-4'],
    relatedWebinarIds: ['webinar-1'],
    relatedResourceIds: ['res-1', 'res-3'],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Fundamentals of Streak Retinoscopy',
        description: 'Principles of retinoscope optics, working distance, and reflex neutralization.',
        lessons: [
          {
            id: 'les-1-1',
            title: '1.1 Optical Principles of the Streak Retinoscope',
            duration: '15 mins',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            content: 'In this lesson, we explore the plane mirror vs concave mirror effect in streak retinoscopy, collar position adjustments, and recognizing With-motion, Against-motion, and Neutralization.'
          },
          {
            id: 'les-1-2',
            title: '1.2 Neutralizing Spherical and Astigmatic Reflexes',
            duration: '25 mins',
            type: 'video',
            content: 'Step-by-step breakdown of identifying principal meridians, neutralizing the speed and width of the streak, and calculating net retinoscopy results.'
          },
          {
            id: 'les-1-3',
            title: '1.3 Retinoscopy Practical Knowledge Check',
            duration: '15 mins',
            type: 'quiz',
            quiz: [
              {
                id: 'q1',
                question: 'When performing retinoscopy at a working distance of 67 cm (2/3 m), what working distance lens deduction must be applied to the gross retinoscopy result?',
                options: ['-1.00 D', '-1.50 D', '-2.00 D', '-0.50 D'],
                correctIndex: 1,
                explanation: 'A working distance of 67 cm corresponds to 1 / 0.67 = 1.50 D working lens deduction.'
              },
              {
                id: 'q2',
                question: 'If you observe a fast, bright, and wide streak reflex moving in the SAME direction as the retinoscope beam, the eye is:',
                options: ['High Myopic', 'Under-corrected or Hyperopic', 'Neutralized', 'Irregular Astigmatic'],
                correctIndex: 1,
                explanation: 'With-motion indicates hyperopia or under-corrected myopia when using a plane mirror stream.'
              }
            ]
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Subjective Refinement & Cross Cylinder',
        description: 'Axis refinement, cylinder power determination, and duochrome verification.',
        lessons: [
          {
            id: 'les-2-1',
            title: '2.1 Jackson Cross Cylinder (JCC) Axis Refinement Protocol',
            duration: '20 mins',
            type: 'video',
            content: 'Learn how to align the JCC handle along the trial frame cylinder axis to refine cylinder direction.'
          },
          {
            id: 'les-2-2',
            title: '2.2 Binocular Balancing via Duochrome & Red-Green Test',
            duration: '20 mins',
            type: 'reading',
            content: 'Chromatic aberration principles: why red light focuses behind the retina and green light focuses in front of the retina.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'ophthalmic-ot-asepsis-instrumentation',
    title: 'Ophthalmic Operating Theatre Asepsis, Sterilization & Instrument Care',
    shortDescription: 'Standard operating protocols for OT sterile fields, autoclave monitoring, phaco machine prep, and intraoperative assist routines.',
    fullDescription: 'Designed specifically for Operating Theatre Assistants and Surgical Nurses in eye care hospitals. Learn international surgical infection control guidelines, flash autoclaving protocols, microsurgical instrument handling, and phacoemulsification cassette priming.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    level: 'Beginner',
    duration: '4 Weeks (Self-Paced)',
    instructor: SPEAKERS.dr_aravind,
    targetRoles: ['Operating Theatre Assistant', 'Outpatient Assistant', 'Ward Assistant'],
    topics: ['OT Protocols', 'Sterilization', 'Surgical Assisting', 'Infection Control'],
    rating: 4.95,
    enrolledCount: 2180,
    certificateAvailable: true,
    learningObjectives: [
      'Implement 7-step surgical hand scrubbing and aseptic gowning protocols.',
      'Inspect, clean, and autoclave delicate microsurgical ophthalmic instruments without damage.',
      'Prepare sterile phacoemulsification tubing, viscoelastic cartridges, and intraocular lens injectors.',
      'Maintain strict post-operative endophthalmitis prevention protocols in high-volume cataract OT.'
    ],
    prerequisites: ['Basic hospital infection safety training'],
    relatedBiteIds: ['bite-2'],
    relatedWebinarIds: ['webinar-2'],
    relatedResourceIds: ['res-2'],
    modules: [
      {
        id: 'mod-2-1',
        title: 'Module 1: Surgical Hand Hygiene & Gowning Protocols',
        description: 'WHO surgical hand scrub standard operating procedures.',
        lessons: [
          {
            id: 'les-2-1-1',
            title: '1.1 Surgical Hand Scrub Technique & Drying',
            duration: '12 mins',
            type: 'video',
            content: 'Step-by-step video demonstration of 5-minute surgical hand scrubbing using Chlorhexidine gluconate.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'slit-lamp-biomicroscopy-anterior-segment',
    title: 'Slit Lamp Biomicroscopy & Anterior Segment Examination',
    shortDescription: 'Comprehensive training on illumination techniques, cornea assessment, tear film evaluation, and glaucoma screening.',
    fullDescription: 'Essential training for Optometrists, Refractionists, and Outpatient Assistants. Master diffuse illumination, focal illumination, retro-illumination, specular reflection, and sclerotic scatter for detecting corneal dystrophy, cataract grading, and anterior chamber depth evaluation.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    level: 'Intermediate',
    duration: '5 Weeks (Self-Paced)',
    instructor: SPEAKERS.dr_meenakshi,
    targetRoles: ['Optometrist', 'Refractionist', 'Outpatient Assistant'],
    topics: ['Slit Lamp', 'Cornea', 'Anterior Segment', 'Glaucomatous Screening'],
    rating: 4.88,
    enrolledCount: 960,
    certificateAvailable: true,
    learningObjectives: [
      'Master 6 fundamental illumination techniques on the slit lamp biomicroscope.',
      'Grade corneal fluorescein staining and tear breakup time (TBUT) for dry eye syndrome.',
      'Estimate anterior chamber depth using Van Herick optical section method.',
      'Identify nuclear, cortical, and posterior subcapsular cataract severity using LOCS III grading.'
    ],
    prerequisites: ['Ocular anatomy and physiology'],
    relatedBiteIds: ['bite-3'],
    relatedWebinarIds: ['webinar-1'],
    relatedResourceIds: ['res-1']
  }
];

export const WEBINARS: Webinar[] = [
  {
    id: 'webinar-1',
    slug: 'pediatric-refraction-and-amblyopia-management-2026',
    title: 'Pediatric Refraction, Cycloplegic Protocols & Amblyopia Management 2026',
    description: 'Join Dr. Meenakshi Swaminathan and Prof. Kalpana Suresh for an interactive live masterclass on pediatric refractive error correction, atropine/cyclopentolate cycloplegic regimens, and contemporary patching strategies.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    date: 'Thursday, Sept 18, 2026',
    time: '6:30 PM - 8:00 PM IST',
    duration: '90 Minutes',
    speaker: SPEAKERS.dr_meenakshi,
    status: 'upcoming',
    learningObjectives: [
      'Differentiate when to use Atropine vs Cyclopentolate vs Tropicamide in pediatric refraction.',
      'Calculate precise spectacle prescription adjustments for accommodative esotropia.',
      'Implement evidence-based occlusion patch protocols vs digital dichoptic amblyopia therapies.'
    ],
    whoShouldAttend: ['Optometrists', 'Refractionists', 'Pediatric Ophthalmologists', 'Orthoptists'],
    agenda: [
      { time: '6:30 PM - 6:45 PM', topic: 'Cycloplegic Agents & Safety Margins in Toddlers' },
      { time: '6:45 PM - 7:15 PM', topic: 'Subjective Verification & Prescribing Rules for Hyperopia/Astigmatism' },
      { time: '7:15 PM - 7:45 PM', topic: 'Amblyopia Occlusion vs Optical Treatment Masterclass' },
      { time: '7:45 PM - 8:00 PM', topic: 'Live Q&A Session' }
    ],
    registeredCount: 840,
    topics: ['Pediatric Optometry', 'Amblyopia', 'Cycloplegic Refraction'],
    relatedCourseIds: ['course-1']
  },
  {
    id: 'webinar-2',
    slug: 'preventing-post-cataract-endophthalmitis-ot-mastery',
    title: 'Preventing Post-Cataract Endophthalmitis: OT Protocol Masterclass',
    description: 'Critical infection control principles, intracameral antibiotic preparation, sterile field maintenance, and emergency drill procedures for ophthalmic OT staff.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
    date: 'Recorded Masterclass',
    time: 'On-Demand Access',
    duration: '75 Minutes',
    speaker: SPEAKERS.dr_aravind,
    status: 'recorded',
    recordingUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    learningObjectives: [
      'Identify contamination sources during high-volume cataract surgical days.',
      'Audit autoclave biological indicators and chemical integrator strips correctly.',
      'Standardize Povidone-Iodine 5% skin and conjunctival sac prophylaxis procedures.'
    ],
    whoShouldAttend: ['OT Assistants', 'Ophthalmic Surgeons', 'Infection Control Nurses', 'Hospital Administrators'],
    agenda: [
      { time: '00:00 - 20:00', topic: 'Microbiology of Post-Operative Endophthalmitis' },
      { time: '20:00 - 50:00', topic: 'Sterile Field Maintenance & Airflow HVAC Monitoring' },
      { time: '50:00 - 75:00', topic: 'Audit Checklist Demonstration & QA Session' }
    ],
    registeredCount: 3120,
    topics: ['OT Safety', 'Infection Control', 'Sterilization'],
    relatedCourseIds: ['course-2']
  }
];

export const SIKSHA_BITES: SikshaBite[] = [
  {
    id: 'bite-1',
    slug: 'identifying-scissor-retinoscopy-reflex',
    title: 'Recognizing & Neutralizing Scissor Reflex in Irregular Astigmatism',
    summary: 'A 5-minute micro-learning video on how to split the central vs peripheral streak reflex in keratoconus and irregular corneas.',
    content: `### What is a Scissor Reflex?

When performing retinoscopy on a patient with corneal scarring, keratoconus, or post-LASIK ectasia, the optical reflex does not move as a uniform line. Instead, two light streaks appear from opposite edges of the pupil and move toward each other, meeting in the center like blades of a pair of scissors closing.

### Step-by-Step Neutralization Protocol

1. **Isolate the Central 3mm Pupil Zone:** Ignore the peripheral swirl and focus solely on the optical center of the cornea.
2. **Shorten Working Distance:** Move closer (e.g. from 67cm to 50cm) to increase light intensity and visual clarity of the reflex.
3. **Use Small Aperture Trial Lenses:** Place a pinhole disc in the trial frame to confirm subjective visual improvement.
4. **Transition to Keratometry/Topography:** Acknowledge that retinoscopy provides an initial baseline, but corneal topography is required for quantitative analysis.`,
    keyTakeaways: [
      'Scissor reflex indicates spherical aberration or irregular corneal curvature.',
      'Neutralize the center 3mm pupil reflex, ignoring peripheral motion.',
      'Verify with pinhole acuity testing before finalizing cylinder axis.'
    ],
    duration: '4 Mins Read / Video',
    author: SPEAKERS.prof_kalpana,
    role: 'Refractionist',
    topic: 'Refraction',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: 'August 14, 2026',
    relatedCourseId: 'course-1'
  },
  {
    id: 'bite-2',
    slug: 'chemical-integrator-strips-autoclave-verification',
    title: 'Class 5 Chemical Integrator Strips: Reading Sterilization Clearance',
    summary: 'Learn how to read Class 5 chemical indicator strips inside ophthalmic instrument trays to confirm steam sterilization.',
    content: `### Why Class 5 Integrator Strips Matter

Class 5 chemical integrators respond to all three critical sterilization parameters: time, temperature, and saturated steam. In an ophthalmic OT handling 30+ cataract surgeries a day, visual verification of the Class 5 strip inside EVERY surgical pack is mandatory before touching instruments.

### Quick Verification Checklist

- **REJECT Tray if:** Dark line did not pass into the PASS zone or color remains pale yellow.
- **ACCEPT Tray if:** Dark blue/purple indicator bar has completely crossed into the ACCEPT window.
- **Log Entry:** Staple strip to OT Sterilization Logbook along with autoclave cycle number.`,
    keyTakeaways: [
      'Class 5 strips measure time, temperature, and steam pressure simultaneously.',
      'Must be placed in the geometric center of the instrument container.',
      'Never use an instrument tray if the indicator bar fails to reach the PASS line.'
    ],
    duration: '3 Mins Read',
    author: SPEAKERS.dr_aravind,
    role: 'Operating Theatre Assistant',
    topic: 'Sterilization',
    difficulty: 'Basic',
    thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400',
    publishedDate: 'July 22, 2026',
    relatedCourseId: 'course-2'
  },
  {
    id: 'bite-3',
    slug: 'van-herick-angle-depth-estimation',
    title: 'Van Herick Method: Quick Slit-Lamp Anterior Chamber Angle Assessment',
    summary: 'Estimate peripheral anterior chamber depth in seconds without gonioscopy using 60-degree narrow slit lamp optical section.',
    content: `### Van Herick Angle Grading Scale

Set slit lamp illumination beam at 60 degrees angle to microscope axis. Position high-intensity narrow optical beam at limbus.

- **Grade 4 (Wide Open):** Aqueous space ≥ corneal thickness (AC angle 35°–45°).
- **Grade 3 (Open):** Aqueous space = 1/4 to 1/2 corneal thickness.
- **Grade 2 (Narrow):** Aqueous space = 1/4 corneal thickness (Occludable angle risk!).
- **Grade 1 (Extremely Narrow):** Aqueous space < 1/4 corneal thickness.
- **Grade 0 (Closed):** No corneal shadow visible.`,
    keyTakeaways: [
      'Beam must be focused at 60° angle at the extreme temporal or nasal limbus.',
      'Grade 2 or less requires immediate gonioscopy before dilating drops.',
      'Prevents iatrogenic angle-closure glaucoma attacks during pupil dilation.'
    ],
    duration: '5 Mins Read',
    author: SPEAKERS.dr_meenakshi,
    role: 'Optometrist',
    topic: 'Anterior Segment',
    difficulty: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400',
    publishedDate: 'August 02, 2026',
    relatedCourseId: 'course-3'
  }
];

export const AOP_ROLES: AopRole[] = [
  {
    id: 'refractionist',
    slug: 'refractionist',
    title: 'Refractionist',
    tagline: 'Precision optics, retinoscopy, spectacle dispensing & visual acuity evaluation.',
    iconName: 'Glasses',
    overview: 'Refractionists are visual healthcare professionals trained to measure refractive errors, operate automated and manual retinoscopes, perform subjective refinement, prescribe optical lenses, and detect preliminary signs of eye disease requiring ophthalmologist referral.',
    keyResponsibilities: [
      'Measure distant and near unassisted and corrected visual acuity.',
      'Perform streak retinoscopy and automated objective refraction.',
      'Refine spherical and cylinder power using Jackson Cross-Cylinder.',
      'Dispense ophthalmic lenses and measure interpupillary distance (IPD).'
    ],
    competenciesCount: 14,
    knowledgeCompetencies: [
      {
        id: 'c-ref-1',
        code: 'K-REF-01',
        title: 'Geometric Optics & Ocular Refractive Components',
        domain: 'Ophthalmic Optics',
        role: 'Refractionist',
        type: 'Knowledge',
        description: 'Understands schematic eye optical constants, refractive indices of cornea (1.376) and lens (1.406), and focal point displacement in axial vs refractive ametropia.',
        rubricCriteria: ['Explains emmetropia, myopia, hyperopia, and astigmatism', 'Calculates focal length in diopters'],
        assessmentMethod: 'Online MCQ & Viva Examination'
      },
      {
        id: 'c-ref-2',
        code: 'K-REF-02',
        title: 'Presbyopic Add Calculation & Working Distance',
        domain: 'Clinical Refraction',
        role: 'Refractionist',
        type: 'Knowledge',
        description: 'Determines appropriate near addition power based on patient age, occupational working distance, and amplitude of accommodation.',
        rubricCriteria: ['Applies age-expected presbyopic add tables correctly', 'Verifies near point of convergence and accommodation'],
        assessmentMethod: 'Clinical Case Scenario Quiz'
      }
    ],
    skillCompetencies: [
      {
        id: 'c-ref-s1',
        code: 'S-REF-01',
        title: 'Streak Retinoscopy Execution & Neutralization',
        domain: 'Objective Refraction',
        role: 'Refractionist',
        type: 'Skill',
        description: 'Demonstrates streak retinoscope operation, working lens deduction, axis determination, and speed neutralization within 3 minutes per eye.',
        rubricCriteria: ['Correct alignment of retinoscope beam', 'Accurate identification of principal meridians within 5 degrees', 'Net refraction matches spherical equivalent within ±0.25D'],
        assessmentMethod: 'Direct Observation Skill Rubric (OSCE)'
      },
      {
        id: 'c-ref-s2',
        code: 'S-REF-02',
        title: 'Pinhole Visual Acuity & Subjective Fogging',
        domain: 'Subjective Refraction',
        role: 'Refractionist',
        type: 'Skill',
        description: 'Performs pinhole test to differentiate optical ametropia from pathological vision loss, followed by +1.50D subjective fogging.',
        rubricCriteria: ['Instructs patient correctly on pinhole target', 'Applies fogging lens to relax accommodation'],
        assessmentMethod: 'Practical Skill Rubric'
      }
    ],
    recommendedCourseIds: ['course-1', 'course-3'],
    relatedBiteIds: ['bite-1', 'bite-3'],
    relatedWebinarIds: ['webinar-1'],
    relatedResourceIds: ['res-1', 'res-3']
  },
  {
    id: 'optometrist',
    slug: 'optometrist',
    title: 'Optometrist',
    tagline: 'Comprehensive primary eye care, binocular vision, contact lenses & diagnostic testing.',
    iconName: 'Eye',
    overview: 'Optometrists provide primary eye care including visual examination, diagnosis of binocular vision anomalies, contact lens fitting, low vision rehabilitation, and co-management of ocular diseases.',
    keyResponsibilities: [
      'Perform comprehensive ocular health examinations including slit lamp assessment.',
      'Fit soft, rigid gas permeable (RGP), and scleral contact lenses.',
      'Evaluate binocular vision, strabismus, accommodation, and eye motility.',
      'Interpret corneal topography, visual field perimetry, and OCT scans.'
    ],
    competenciesCount: 22,
    knowledgeCompetencies: [
      {
        id: 'c-opt-1',
        code: 'K-OPT-01',
        title: 'Binocular Vision Anomalies & Orthoptic Assessment',
        domain: 'Binocular Vision',
        role: 'Optometrist',
        type: 'Knowledge',
        description: 'Understands AC/A ratio calculations, convergence insufficiency criteria, and heterophoria measurement techniques.',
        rubricCriteria: ['Calculates gradient vs calculated AC/A ratio', 'Interprets Sheard and Percival criteria for prism prescription'],
        assessmentMethod: 'Written Examination'
      }
    ],
    skillCompetencies: [
      {
        id: 'c-opt-s1',
        code: 'S-OPT-01',
        title: 'Slit Lamp Biomicroscopy & Corneal Staining',
        domain: 'Anterior Segment Assessment',
        role: 'Optometrist',
        type: 'Skill',
        description: 'Executes diffuse, optical section, specular reflection, and cobalt blue fluorescein staining evaluation on slit lamp.',
        rubricCriteria: ['Grades corneal staining according to Oxford scale', 'Estimates Van Herick angle accurately'],
        assessmentMethod: 'OSCE Practical Evaluation'
      }
    ],
    recommendedCourseIds: ['course-1', 'course-3'],
    relatedBiteIds: ['bite-3'],
    relatedWebinarIds: ['webinar-1'],
    relatedResourceIds: ['res-1']
  },
  {
    id: 'operating-theatre-assistant',
    slug: 'operating-theatre-assistant',
    title: 'Operating Theatre Assistant (OTA)',
    tagline: 'Surgical sterile fields, microsurgical instrument maintenance & intraoperative assist.',
    iconName: 'ShieldAlert',
    overview: 'Ophthalmic OT Assistants ensure sterile surgical environments, manage autoclaves, prepare microsurgical phacoemulsification and vitreoretinal consoles, and assist surgeons during cataract, glaucoma, and vitreoretinal operations.',
    keyResponsibilities: [
      'Maintain OT sterility, airflow HVAC, and chemical/biological indicators.',
      'Clean, inspect under magnification, and pack ophthalmic surgical instruments.',
      'Prime and test phacoemulsification, vitrectomy, and laser equipment.',
      'Perform scrub nurse and circulating nurse duties during surgery.'
    ],
    competenciesCount: 18,
    knowledgeCompetencies: [
      {
        id: 'c-ota-1',
        code: 'K-OTA-01',
        title: 'Steam Autoclaving Cycles & Biological Monitoring',
        domain: 'Sterilization Science',
        role: 'Operating Theatre Assistant',
        type: 'Knowledge',
        description: 'Understands Geobacillus stearothermophilus spore test incubation, flash autoclaving limitations, and Class 1-6 chemical indicators.',
        rubricCriteria: ['Explains parameters for 121°C vs 134°C cycles', 'Describes procedure for positive spore test quarantine'],
        assessmentMethod: 'Written Assessment'
      }
    ],
    skillCompetencies: [
      {
        id: 'c-ota-s1',
        code: 'S-OTA-01',
        title: 'Aseptic Scrubbing, Gowning & Glove Technique',
        domain: 'Asepsis',
        role: 'Operating Theatre Assistant',
        type: 'Skill',
        description: 'Demonstrates 5-minute surgical hand scrub, closed gloving, and sterile trolley setup without contamination.',
        rubricCriteria: ['Zero contact with non-sterile surfaces', 'Correct gloving technique maintains cuff integrity'],
        assessmentMethod: 'Direct Observation Skill Rubric'
      }
    ],
    recommendedCourseIds: ['course-2'],
    relatedBiteIds: ['bite-2'],
    relatedWebinarIds: ['webinar-2'],
    relatedResourceIds: ['res-2']
  },
  {
    id: 'vision-technician',
    slug: 'vision-technician',
    title: 'Vision Technician',
    tagline: 'Primary vision screening, tele-ophthalmology & community eye care delivery.',
    iconName: 'Activity',
    overview: 'Vision Technicians operate primary vision centers in rural and semi-urban communities, screening patients for refractive errors, cataract, and glaucoma while connecting with ophthalmologists via tele-ophthalmology platforms.',
    keyResponsibilities: [
      'Screen visual acuity and perform preliminary auto-refraction.',
      'Capture high-quality anterior segment and non-mydriatic fundus images.',
      'Educate communities on eye health, hygiene, and spectacle compliance.'
    ],
    competenciesCount: 12,
    knowledgeCompetencies: [],
    skillCompetencies: [],
    recommendedCourseIds: ['course-1'],
    relatedBiteIds: ['bite-1'],
    relatedWebinarIds: ['webinar-1'],
    relatedResourceIds: ['res-3']
  },
  {
    id: 'counsellor',
    slug: 'counsellor',
    title: 'Eye Care Counsellor',
    tagline: 'Patient communication, surgical procedure counseling & treatment compliance.',
    iconName: 'HeartHandshake',
    overview: 'Counsellors help patients understand surgical recommendations (e.g. cataract IOL options, glaucoma therapy, corneal transplant expectations), financial options, and post-operative drops compliance.',
    keyResponsibilities: [
      'Explain surgical procedures and intraocular lens (IOL) choices clearly.',
      'Address patient fears and financial questions empathetically.',
      'Instruct patients on post-operative eye drop schedules and care.'
    ],
    competenciesCount: 10,
    knowledgeCompetencies: [],
    skillCompetencies: [],
    recommendedCourseIds: [],
    relatedBiteIds: [],
    relatedWebinarIds: [],
    relatedResourceIds: []
  },
  {
    id: 'outpatient-assistant',
    slug: 'outpatient-assistant',
    title: 'Outpatient Assistant (OPA)',
    tagline: 'OPD patient flow, preliminary diagnostic workup & eye drop administration.',
    iconName: 'UserCheck',
    overview: 'OPAs streamline hospital outpatient clinics by measuring intraocular pressure (IOP tonometer), instilling diagnostic eye drops, history taking, and assisting doctors in exam rooms.',
    keyResponsibilities: ['Preliminary history taking', 'Non-contact tonometry (NCT)', 'Pupillary dilation protocol'],
    competenciesCount: 12,
    knowledgeCompetencies: [],
    skillCompetencies: [],
    recommendedCourseIds: ['course-3'],
    relatedBiteIds: ['bite-3'],
    relatedWebinarIds: [],
    relatedResourceIds: []
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'res-1',
    slug: 'streak-retinoscopy-step-by-step-guide',
    title: 'Streak Retinoscopy Step-by-Step Procedure & Neutralization Flowchart',
    type: 'Teaching Slide',
    format: 'PDF',
    fileSize: '4.2 MB',
    topic: 'Refraction',
    targetRole: 'Refractionist',
    level: 'Skill',
    description: 'High-resolution downloadable teaching slides and laminated desk flowchart for student refractionists covering spherical neutralization, axis location, and working distance calculations.',
    downloadCount: 4520,
    author: 'Prof. Kalpana Suresh',
    publishedDate: 'July 2026'
  },
  {
    id: 'res-2',
    slug: 'ophthalmic-ot-sterilization-audit-checklist',
    title: 'Ophthalmic Operating Theatre Daily Sterilization & Infection Control Audit Form',
    type: 'Log Form',
    format: 'DOCX',
    fileSize: '1.8 MB',
    topic: 'Sterilization',
    targetRole: 'Operating Theatre Assistant',
    level: 'Knowledge',
    description: 'Standard institutional audit checklist for tracking autoclave cycle numbers, Class 5 chemical integrators, biological indicator logs, and air change rate HVAC monitoring.',
    downloadCount: 3180,
    author: 'Aurosiksha Safety Committee',
    publishedDate: 'June 2026'
  },
  {
    id: 'res-3',
    slug: 'subjective-refraction-question-bank-100',
    title: '100 Clinical Case Question Bank: Subjective Refraction & Astigmatism',
    type: 'Question Bank',
    format: 'PDF',
    fileSize: '2.5 MB',
    topic: 'Optometry Education',
    targetRole: 'Optometrist',
    level: 'Knowledge',
    description: 'Curated 100 multiple-choice questions with step-by-step rationale for optical educators conducting student assessments on JCC, duochrome, and astigmatism prescription.',
    downloadCount: 6890,
    author: 'Dr. Meenakshi Swaminathan',
    publishedDate: 'August 2026'
  }
];

export const EBOOKS: EBook[] = [
  {
    id: 'ebook-1',
    slug: 'manual-of-allied-ophthalmic-learning-standards',
    title: 'Manual of Allied Ophthalmic Learning & Competency Standards',
    subtitle: 'A National Curriculum Guide for Ophthalmic Personnel Training',
    author: 'Aurosiksha Academic Board',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600',
    coverBg: 'from-slate-900 to-teal-900',
    description: 'The definitive 280-page reference guide outlining knowledge domains, skill rubrics, OSCE assessment formats, and clinical rotation schedules for training Refractionists, Optometrists, and OT Assistants.',
    pagesCount: 284,
    tableOfContents: [
      'Chapter 1: Ocular Anatomy, Physiology & Optics Overview',
      'Chapter 2: Standardized Competency-Based Education (CBE) Model',
      'Chapter 3: Refractionist Clinical Skill Modules & Rubrics',
      'Chapter 4: Operating Theatre Asepsis & Infection Control Standards',
      'Chapter 5: Student Assessment, OSCE Scoring & Certification Framework'
    ],
    downloadCount: 8940,
    targetRoles: ['Refractionist', 'Optometrist', 'Operating Theatre Assistant', 'Educator'],
    publishedYear: '2026'
  },
  {
    id: 'ebook-2',
    slug: 'practical-retinoscopy-and-lens-dispensing-handbook',
    title: 'Practical Retinoscopy & Ophthalmic Lens Dispensing Handbook',
    subtitle: 'Clinical Troubleshooting & Lens Fitting Guide',
    author: 'Prof. Kalpana Suresh & Dr. R. Aravind',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    coverBg: 'from-blue-950 to-indigo-900',
    description: 'A illustrated field manual for eye clinic personnel covering streak retinoscope calibration, cross-cylinder techniques, progressive lens marking, and troubleshooting non-adaptation to eyeglasses.',
    pagesCount: 165,
    tableOfContents: [
      'Section 1: Retinoscope Optics & Reflex Interpretation',
      'Section 2: High Astigmatism & Irregular Reflex Management',
      'Section 3: Progressive Addition Lens (PAL) Fitting Procedures',
      'Section 4: Spectacle Frame Alignment & Vertex Distance Corrections'
    ],
    downloadCount: 5410,
    targetRoles: ['Refractionist', 'Optician', 'Optometrist'],
    publishedYear: '2025'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'transforming-eye-care-training-competency-based-frameworks',
    title: 'Transforming Eye-Care Training: Why Competency-Based Frameworks Outperform Traditional Lectures',
    excerpt: 'How moving from passive lecture hours to structured Learn → Practice → Assess → Demonstrate cycles improves patient safety and surgical assistant confidence.',
    content: `Traditional ophthalmic education often relied on passive classroom lecture hours and informal apprenticeship. However, modern eye-care demands standardized clinical competencies where every Refractionist, OT Assistant, and Optometrist demonstrates verified skill mastery before working independently with patients.

At Aurosiksha, our **Competency-Based Education (CBE)** framework breaks learning into clear Knowledge Domains (theoretical optics, infection control science) and Skill Rubrics (OSCE direct observation of retinoscopy or autoclaving). 

### Key Pillars of the Aurosiksha Learning Model

1. **Learn:** Interactive video lessons and micro-learning Siksha Bites.
2. **Practice:** Standardized clinical logbooks and practical step-by-step guidelines.
3. **Assess:** Online objective quizzes and clinical supervisor OSCE rubrics.
4. **Demonstrate Competency:** Verifiable digital certificates linked to mastered skills.`,
    author: SPEAKERS.prof_kalpana,
    publishedDate: 'August 20, 2026',
    readTime: '6 Mins Read',
    category: 'Education & Pedagogy',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'art-2',
    slug: 'digital-lms-for-eye-hospitals-managing-training-scale',
    title: 'How Eye Hospitals Use Aurosiksha LMS to Scale Allied Ophthalmic Workforce Training',
    excerpt: 'Exploring how institutional directors monitor student progress, standardize teaching slides across regional vision centers, and generate compliance reports.',
    content: `Managing staff training across multi-center eye hospital networks presents significant challenges: inconsistent lecture materials, untracked clinical rotations, and manual paper logbooks.

With Aurosiksha LMS, hospital education departments gain a central dashboard to:
- Enrol batches of vision technicians and OT assistants.
- Assign structured online courses and pre-reading webinars.
- Track real-time completion rates and OSCE practical assessment scores.
- Export institutional compliance reports for accreditation bodies.`,
    author: SPEAKERS.dr_aravind,
    publishedDate: 'July 15, 2026',
    readTime: '5 Mins Read',
    category: 'Institutional LMS',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];
