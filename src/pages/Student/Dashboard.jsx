import React, { lazy, Suspense } from 'react'
import Header from '../../components/Header/StudentHeader'
const Footer = lazy(() => import('../../components/Footer/Footer'))
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Grid,
  Paper,
  Toolbar,
  Link,
  Chip
} from '@mui/material'
import {
  CalendarMonth as CalendarIcon,
  TrendingUp as TrendingIcon,
  Article as ArticleIcon,
  EmojiEvents as TrophyIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material'

function StudentDashboard() {
  const upcomingSessions = [
    { id: 1, tutor: 'Dr. Emily Smith', subject: 'Computer Science - Graph Theory & Network Flows', date: 'October 27, 2023', time: '10:00 AM' },
    { id: 2, tutor: 'Prof. John Jones', subject: 'Database Systems - SQL Query Optimization', date: 'October 28, 2023', time: '02:00 PM' },
    { id: 3, tutor: 'Ms. Sarah Lee', subject: 'Introduction to Community Workshop', date: 'October 29, 2023', time: '09:00 AM' },
    { id: 4, tutor: 'Dr. Michael Brown', subject: 'Object-Oriented Programming - Design Patterns', date: 'October 30, 2023', time: '04:00 PM' }
  ]

  const recentHighlights = [
    { id: 1, title: 'Data Structures', date: 'Oct 25', takeaways: ['Learned about AVL trees.', 'Implemented binary tree searching.', 'Practiced tree traversals.'], feedback: 'Great feedback: Tutor commended understanding.' },
    { id: 2, title: 'Linear Algebra', date: 'Oct 23', takeaways: ['Grasped eigenvalue decomposition.', 'Understood applications in ML.', 'Matrix examples.'], feedback: 'Tutor: Practice with SVD.' }
  ]

  const subjectScores = [
    { subject: 'Algorithms', score: 92 },
    { subject: 'Calculus', score: 88 },
    { subject: 'Statistics', score: 85 }
  ]

  const weeklyStudyHours = [
    { week: 'W1', hours: 12 },
    { week: 'W2', hours: 15 },
    { week: 'W3', hours: 18 },
    { week: 'W4', hours: 14 },
    { week: 'W5', hours: 20 }
  ]

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header />
      <Toolbar />

      <Box component="main" sx={{ flexGrow: 1, py: 1 }}>
        <Container maxWidth="lg" sx={{ px: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>Welcome, Student!</Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid size={{ xs:12, md:4 }}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <CalendarIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    Upcoming Sessions
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {upcomingSessions.map((s) => (
                    <Card key={s.id} variant="outlined">
                      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem' }}>{s.tutor[0]}</Avatar>
                          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.8rem', mb: 0.5 }}>{s.tutor}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, lineHeight: 1.3, fontSize: '0.7rem' }}>{s.subject}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                              <CalendarIcon sx={{ fontSize: 12 }} color="action" />
                              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>{s.date} at {s.time}</Typography>
                            </Box>
                            <Button variant="contained" size="small" fullWidth sx={{ textTransform: 'none', fontSize: '0.7rem', py: 0.4 }}>Join Session</Button>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs:12, md:4 }}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <ArticleIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Recent Highlights</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {recentHighlights.map((h) => (
                    <Card key={h.id} variant="outlined">
                      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{h.title}</Typography>
                          <Chip label={h.date} size="small" sx={{ height: 18, fontSize: '0.65rem' }} />
                        </Box>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5, fontSize: '0.7rem' }}>Key Takeaways:</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, mb: 0.5 }}>
                          {h.takeaways.map((t, i) => (
                            <Typography key={i} component="li" variant="caption" color="text.secondary" sx={{ mb: 0.25, lineHeight: 1.3, fontSize: '0.65rem' }}>{t}</Typography>
                          ))}
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', display: 'block', mb: 0.5, lineHeight: 1.3, fontSize: '0.65rem' }}>{h.feedback}</Typography>
                        <Link href="#" color="primary" variant="caption" sx={{ fontSize: '0.7rem' }}>Provide Feedback</Link>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Paper>

              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <TrendingIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Learning Path</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Mastering Recursion', 'ML Basics', 'Tutor: Sarah Chen'].map((title, i) => (
                    <Card key={i} variant="outlined">
                      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.75rem' }}>{i === 0 ? 'Article:' : i === 1 ? 'Explore:' : ''} {title}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: 'block', lineHeight: 1.3, fontSize: '0.7rem' }}>
                          {i === 0 ? 'Deep dive into recursive algorithms.' : i === 1 ? 'Start your journey into AI.' : 'Expert in Python and Data Science.'}
                        </Typography>
                        <Link href="#" color="primary" variant="caption" sx={{ fontSize: '0.7rem' }}>{i < 2 ? 'Learn More' : 'View Profile'}</Link>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs:12, md:4 }}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <TrendingIcon sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>Academic Progress</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block', fontSize: '0.7rem' }}>View your performance strengths.</Typography>
                <Link href="#" color="primary" sx={{ display: 'block', mb: 2, fontSize: '0.75rem' }}>View Full Progress</Link>

                <Grid container spacing={1.5} sx={{ mb: 2 }}>
                  {[{ label: 'GPA', value: '3.85', sub: 'out of 4.00' }, { label: 'Courses', value: '12', sub: 'out of 40' }, { label: 'Credits', value: '48', sub: 'Toward 120' }, { label: 'Deadlines', value: '3', sub: 'Next 7 days' }].map((stat, i) => (
                    <Grid key={i} size={{ xs: 6 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>{stat.label}</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>{stat.sub}</Typography>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <BarChartIcon sx={{ mr: 0.5, fontSize: 16 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Subject Performance</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: 100 }}>
                    {subjectScores.map((item, i) => (
                      <Box key={i} sx={{ textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, fontSize: '0.65rem' }}>{item.score}</Typography>
                        <Box sx={{ width: 40, height: `${item.score * 0.8}px`, bgcolor: 'primary.main', borderRadius: 0.5, mb: 0.5 }} />
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>{item.subject}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TimelineIcon sx={{ mr: 0.5, fontSize: 16 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Weekly Study Hours</Typography>
                  </Box>
                  <Box sx={{ position: 'relative', height: 80, pl: 2 }}>
                    <Box sx={{ position: 'absolute', left: 0, top: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', fontSize: '0.6rem', color: 'text.secondary', pt: 0.5, pb: 1.5 }}>
                      <span>24</span><span>12</span><span>0</span>
                    </Box>
                    <Box sx={{ position: 'relative', height: '100%', ml: 1, pt: 0.5, pb: 1.5 }}>
                      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 15 }}>
                        <svg width="100%" height="100%">
                          {weeklyStudyHours.map((item, i) => {
                            if (i === 0) return null
                            const prev = weeklyStudyHours[i - 1]
                            return (
                              <line key={i} x1={`${((i-1)/(weeklyStudyHours.length-1))*100}%`} y1={`${100-(prev.hours/24)*100}%`} x2={`${(i/(weeklyStudyHours.length-1))*100}%`} y2={`${100-(item.hours/24)*100}%`} stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--mui-palette-primary-main)' }} />
                            )
                          })}
                          {weeklyStudyHours.map((item, i) => (
                            <circle key={i} cx={`${(i/(weeklyStudyHours.length-1))*100}%`} cy={`${100-(item.hours/24)*100}%`} r="3" fill="currentColor" stroke="white" strokeWidth="1.5" style={{ color: 'var(--mui-palette-primary-main)' }} />
                          ))}
                        </svg>
                      </Box>
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between' }}>
                        {weeklyStudyHours.map((item, i) => (
                          <Typography key={i} variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>{item.week}</Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              <Paper sx={{ p: 2.5, textAlign: 'center', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                <TrophyIcon sx={{ fontSize: 36, mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.95rem' }}>Need Expert Help?</Typography>
                <Typography variant="caption" sx={{ mb: 1.5, display: 'block', opacity: 0.9, fontSize: '0.75rem', lineHeight: 1.4 }}>
                  Explore our network of tutors for personalized support.
                </Typography>
                <Button variant="contained" color="inherit" size="small" sx={{ textTransform: 'none', fontSize: '0.75rem' }}>Find a Tutor</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Box>
  )
}

export default StudentDashboard
