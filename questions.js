// ============================================================
// INTRADOS DESIGN STUDIO – Technical Assessment Test
// questions.js
//
// Section A: Drawing Interpretation & Document Control  Q1–Q10  1 mark each
// Section B: BIM Workflow & Coordination                Q11–Q20 1 mark each
// Section C: Project Scenarios & Decision Making         Q21–Q30 1 mark each
// Total: 30 Questions × 1 Mark = 30 Marks
//
// Answer key: Q1=A  Q2=B  Q3=C  Q4=C  Q5=A
//             Q6=A  Q7=B  Q8=B  Q9=A  Q10=B
//             Q11=B Q12=B Q13=B Q14=B Q15=A
//             Q16=B Q17=B Q18=A Q19=B Q20=B
//             Q21=B Q22=B Q23=B Q24=A Q25=A
//             Q26=B Q27=A Q28=B Q29=B Q30=B
//
// NOTE: All questions are text-based MCQs. Options ARE shuffled
//       per session (Fisher-Yates), scoring is tracked via the
//       { text, correct } pair so display order never affects it.
// ============================================================

const QUESTIONS = [

  // ==========================================================
  // SECTION A – DRAWING INTERPRETATION & DOCUMENT CONTROL (Q1–Q10)
  // 1 mark each | Text MCQ | shuffled
  // ==========================================================

  {
    id: 1, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A floor plan references \"Detail 8 on Sheet A-602\" for a wall junction. Before modeling that junction, what is the primary reason to review the referenced detail?",
    options: [
      "It may contain construction information that overrides or supplements the plan.",
      "It is used only for quantity estimation.",
      "It confirms the drawing scale.",
      "It identifies the project revision history."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 2, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "While comparing two revisions of a drawing, you notice a revision cloud around one room but no obvious graphical change. What should be your next step?",
    options: [
      "Ignore the cloud since no visible change exists.",
      "Compare the revision notes and referenced details before deciding whether the model requires updating.",
      "Update the room immediately because every cloud indicates geometry changes.",
      "Wait until another consultant confirms the change."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 3, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A drawing note conflicts with the graphical representation of the same element. Which approach is most appropriate?",
    options: [
      "Always follow the graphical representation.",
      "Always follow the written note.",
      "Identify the governing document and seek clarification if the conflict cannot be resolved.",
      "Use the dimensions that appear easiest to model."
    ],
    correctIndex: 2,
    marks: 1,
    shuffle: true
  },
  {
    id: 4, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A plan dimension differs from the corresponding section dimension by 20 mm. Before updating the BIM model, what is the best course of action?",
    options: [
      "Use the larger dimension because sections are generally more detailed.",
      "Use the plan dimension because plans control layouts.",
      "Verify the latest approved drawings and determine whether the difference is intentional or requires clarification.",
      "Average both dimensions."
    ],
    correctIndex: 2,
    marks: 1,
    shuffle: true
  },
  {
    id: 5, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "Why are section and detail references repeatedly used throughout construction drawings?",
    options: [
      "To reduce drawing duplication while providing location-specific construction information.",
      "To improve plotting speed.",
      "To reduce the file size of PDFs.",
      "To simplify sheet numbering."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 6, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A drawing contains several General Notes and several Keynotes attached to individual elements. Which statement is most accurate?",
    options: [
      "Keynotes usually apply only to the elements they reference, while General Notes apply more broadly.",
      "General Notes always override every drawing.",
      "Keynotes are only for contractors.",
      "Both have exactly the same purpose."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 7, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A consultant issues Revision 5, but only three sheets appear in the revision index. Which action demonstrates good document control?",
    options: [
      "Update every model immediately.",
      "Review only the affected sheets and determine whether your discipline is impacted.",
      "Ignore the revision until construction begins.",
      "Replace every previous PDF."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 8, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A drawing references a typical detail for several locations. Which assumption is generally safest?",
    options: [
      "Every location is identical regardless of surrounding conditions.",
      "The typical detail applies unless another drawing specifically indicates otherwise.",
      "Typical details are only conceptual.",
      "Typical details should not be modeled."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 9, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "A consultant provides both PDF drawings and native BIM models. During coordination, which source should normally be treated as the contractual reference?",
    options: [
      "The latest approved construction documents defined by the project.",
      "The BIM model only.",
      "The PDF only.",
      "The oldest approved issue."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 10, section: "A",
    sectionLabel: "Drawing Interpretation & Document Control",
    text: "Before beginning BIM modeling from GFC drawings, what is the most important initial review?",
    options: [
      "Check sheet sizes.",
      "Understand the latest drawing issue, revision status, and applicable notes.",
      "Verify PDF bookmarks.",
      "Measure every room manually."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },

  // ==========================================================
  // SECTION B – BIM WORKFLOW & COORDINATION (Q11–Q20)
  // 1 mark each | Text MCQ | shuffled
  // ==========================================================

  {
    id: 11, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "A linked consultant model has been updated. Which workflow best maintains coordination?",
    options: [
      "Replace the old file without checking changes.",
      "Reload the latest link and review the impact before modifying your model.",
      "Rebuild your model from scratch.",
      "Continue working until the next coordination meeting."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 12, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Which practice contributes most to maintaining a healthy BIM model over a long project?",
    options: [
      "Frequently importing CAD files.",
      "Regular QA/QC, controlled content, and removal of unnecessary data.",
      "Creating additional 3D views.",
      "Increasing annotation detail."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 13, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Multiple disciplines are working in separate models. Which process most improves coordination?",
    options: [
      "Independent modeling with final merging.",
      "Regular model exchange and coordination reviews.",
      "Exporting PDFs after every change.",
      "Sharing screenshots only."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 14, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "A coordination issue is discovered during model review. What should happen before changing the design?",
    options: [
      "Modify the model immediately.",
      "Record the issue, confirm responsibility, and obtain agreement before implementation.",
      "Wait until project completion.",
      "Ignore minor clashes."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 15, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Which statement best describes a BIM Execution Plan (BEP)?",
    options: [
      "It defines project BIM standards, workflows, responsibilities, and deliverables.",
      "It contains only project schedules.",
      "It defines only file naming.",
      "It replaces construction drawings."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 16, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Why is model version control important?",
    options: [
      "It reduces rendering time.",
      "It ensures every team member works from the correct project information.",
      "It improves printing quality.",
      "It reduces hardware requirements."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 17, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "During QA/QC, which issue should normally receive the highest priority?",
    options: [
      "View naming inconsistencies.",
      "Model coordination errors affecting construction.",
      "Sheet border alignment.",
      "Annotation font differences."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 18, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Why should unnecessary imported CAD files generally be minimized?",
    options: [
      "They often increase model complexity and reduce performance.",
      "They cannot be printed.",
      "They prevent synchronization.",
      "They automatically change project coordinates."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 19, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Which activity adds the greatest value before model submission?",
    options: [
      "Checking only file size.",
      "Reviewing model completeness, coordination status, and required project standards.",
      "Renaming every view.",
      "Creating additional perspectives."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 20, section: "B",
    sectionLabel: "BIM Workflow & Coordination",
    text: "Which statement best reflects professional BIM collaboration?",
    options: [
      "Every discipline modifies any model as needed.",
      "Each discipline manages its own model while coordinating agreed changes with others.",
      "Only one model should exist.",
      "Coordination occurs only after construction begins."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },

  // ==========================================================
  // SECTION C – PROJECT SCENARIOS & DECISION MAKING (Q21–Q30)
  // 1 mark each | Text MCQ | shuffled
  // ==========================================================

  {
    id: 21, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "A newly issued architectural drawing affects only one portion of your completed model. What is the most efficient approach?",
    options: [
      "Remodel the complete project.",
      "Assess the affected area first and update only verified changes.",
      "Ignore the revision until IFC.",
      "Start coordination from the beginning."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 22, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "A client identifies a discrepancy between the model and GFC drawings. What should happen first?",
    options: [
      "Correct the model immediately.",
      "Verify the discrepancy against the latest approved documents before making changes.",
      "Ask another modeler to decide.",
      "Continue current production."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 23, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "During coordination, two consultants provide conflicting information. Which approach is most appropriate?",
    options: [
      "Follow whichever drawing was received first.",
      "Document the conflict and obtain clarification from the responsible design authority.",
      "Choose the simpler option.",
      "Model both options."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 24, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "Why are RFIs important during BIM production?",
    options: [
      "They formally resolve unclear or conflicting project information.",
      "They replace shop drawings.",
      "They improve rendering quality.",
      "They reduce file sizes."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 25, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "A deadline is approaching, but several unresolved coordination issues remain. What demonstrates professional practice?",
    options: [
      "Complete the model while documenting unresolved issues through the agreed project process.",
      "Ignore outstanding issues.",
      "Delay every submission.",
      "Remove affected model elements."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 26, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "A consultant issues a new revision after your model has already been submitted. What should happen next?",
    options: [
      "Ignore the new revision.",
      "Evaluate its impact, coordinate required changes, and issue an updated model if necessary.",
      "Restart the project.",
      "Replace only the PDFs."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 27, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "Which activity contributes most to reducing coordination problems later in the project?",
    options: [
      "Frequent interdisciplinary coordination reviews.",
      "Producing more rendered views.",
      "Increasing sheet numbers.",
      "Adding more drafting views."
    ],
    correctIndex: 0,
    marks: 1,
    shuffle: true
  },
  {
    id: 28, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "What is the primary objective of QA/QC before model delivery?",
    options: [
      "Reduce file size.",
      "Confirm that the deliverable satisfies project requirements and quality standards.",
      "Improve rendering.",
      "Increase model detail regardless of scope."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 29, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "A BIM model contains information beyond the agreed project scope. What is the most appropriate action?",
    options: [
      "Deliver everything because more information is always better.",
      "Align the model with the agreed project scope and client requirements.",
      "Remove all parameters.",
      "Convert the model to CAD."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  },
  {
    id: 30, section: "C",
    sectionLabel: "Project Scenarios & Decision Making",
    text: "Which quality best distinguishes an experienced BIM Modeler?",
    options: [
      "Fast modeling speed alone.",
      "Ability to interpret drawings, coordinate with multiple disciplines, identify issues early, and deliver accurate models.",
      "Advanced rendering skills.",
      "Knowledge of keyboard shortcuts."
    ],
    correctIndex: 1,
    marks: 1,
    shuffle: true
  }

]; // end QUESTIONS


// ============================================================
// SHUFFLE ENGINE
// All questions (shuffle: true) have their options Fisher-Yates
// shuffled per session. Correct answer tracking is done via the
// { text, correct } pair so scoring is never broken regardless
// of display order.
// ============================================================

function shuffleQuestionOptions(question) {
  const q = JSON.parse(JSON.stringify(question));

  // Skip shuffle if explicitly disabled on a question
  if (!q.shuffle) return q;

  const paired = q.options.map(function(text, i) {
    return { text: text, correct: (i === q.correctIndex) };
  });

  // Fisher-Yates
  for (let i = paired.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = paired[i]; paired[i] = paired[j]; paired[j] = tmp;
  }

  q.options      = paired.map(function(p) { return p.text; });
  q.correctIndex = paired.findIndex(function(p) { return p.correct; });

  return q;
}

const SHUFFLED_QUESTIONS = QUESTIONS.map(shuffleQuestionOptions);
