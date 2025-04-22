import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { 
  Calendar, 
  Clock, 
  FileText, 
  Pill, 
  CreditCard, 
  MessageSquare,
  User,
  CalendarClock,
  FilePlus2,
  Bot,
  Upload
} from 'lucide-react';

// Interfaces for component props
interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed';
}

interface RecordCardProps {
  title: string;
  date: string;
  doctor: string;
  type: string;
}

interface PrescriptionCardProps {
  medication: string;
  instructions: string;
  prescribedDate: string;
  doctor: string;
  refills: number;
  active: boolean;
}

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentCardProps | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [featureMessage, setFeatureMessage] = useState<string | null>(null);

  // Function to show a toast message
  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Show feature unavailable message
  const showFeatureUnavailable = (feature: string) => {
    setFeatureMessage(feature);
    setTimeout(() => setFeatureMessage(null), 3000);
  };

  // Handler for rescheduling
  const handleReschedule = (appointment: AppointmentCardProps) => {
    setSelectedAppointment(appointment);
    setShowRescheduleModal(true);
  };

  // Close the reschedule modal
  const closeRescheduleModal = () => {
    setShowRescheduleModal(false);
    setSelectedAppointment(null);
  };

  // Confirm the reschedule
  const confirmReschedule = () => {
    closeRescheduleModal();
    showToastMessage('Appointment rescheduled successfully!');
  };

  // Open booking modal
  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  // Close booking modal
  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  // Confirm booking
  const confirmBooking = () => {
    closeBookingModal();
    showToastMessage('Appointment booked successfully!');
  };

  // Handle record actions
  const handleRecordAction = (action: string) => {
    showToastMessage(`This feature is not available yet. You cannot ${action} records at this time.`);
  };

  // Handle medication history
  const handleMedicationHistory = () => {
    showToastMessage('Medication history will be available soon.');
  };

  // Add event listener for appointment rescheduling
  useEffect(() => {
    const handleRescheduleEvent = (event: Event) => {
      const appointmentEvent = event as CustomEvent<AppointmentCardProps>;
      handleReschedule(appointmentEvent.detail);
    };

    document.addEventListener('reschedule-appointment', handleRescheduleEvent as EventListener);

    return () => {
      document.removeEventListener('reschedule-appointment', handleRescheduleEvent as EventListener);
    };
  }, []);

  return (
    <div className="pt-24 pb-12 px-4 md:px-6 lg:px-12 max-w-[1400px] mx-auto">
      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
          {toastMessage}
        </div>
      )}
      
      {/* Welcome Banner with Health Score */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl mb-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 transform -skew-x-12"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah</h1>
              <p className="text-blue-100">Manage your health journey in one place</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider">Health Score</span>
                <div className="text-3xl font-bold mt-1">85</div>
                <div className="text-xs mt-1 text-blue-100">Very Good</div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider">Next Appointment</div>
              <div className="font-medium mt-1">Tomorrow, 10:30 AM</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider">Active Medications</div>
              <div className="font-medium mt-1">3 Prescriptions</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider">Last Checkup</div>
              <div className="font-medium mt-1">May 10, 2023</div>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-xs uppercase tracking-wider">Insurance Status</div>
              <div className="font-medium mt-1">Active</div>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex space-x-1 bg-white p-1 border-b border-gray-200 mb-8 overflow-x-auto">
          <TabsTrigger 
            value="dashboard" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <User className="w-4 h-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger 
            value="appointments" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'appointments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <CalendarClock className="w-4 h-4 mr-2" />
            Appointments
          </TabsTrigger>
          <TabsTrigger 
            value="records" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'records' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <FileText className="w-4 h-4 mr-2" />
            Medical Records
          </TabsTrigger>
          <TabsTrigger 
            value="prescriptions" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'prescriptions' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Pill className="w-4 h-4 mr-2" />
            Prescriptions
          </TabsTrigger>
          <TabsTrigger 
            value="payments" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'payments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Payments
          </TabsTrigger>
          <TabsTrigger 
            value="aihealth" 
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'aihealth' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Bot className="w-4 h-4 mr-2" />
            AI Health Assistant
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8">
          {/* Activity & Vitals Summary */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Health Activity & Vitals</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Blood Pressure</span>
                  <div className="flex items-end mt-2">
                    <span className="text-2xl font-bold text-gray-900">120/80</span>
                    <span className="text-sm text-gray-500 ml-1 mb-1">mmHg</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-xs text-green-600 mt-1">Normal</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Heart Rate</span>
                  <div className="flex items-end mt-2">
                    <span className="text-2xl font-bold text-gray-900">72</span>
                    <span className="text-sm text-gray-500 ml-1 mb-1">bpm</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-xs text-green-600 mt-1">Normal</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Blood Glucose</span>
                  <div className="flex items-end mt-2">
                    <span className="text-2xl font-bold text-gray-900">95</span>
                    <span className="text-sm text-gray-500 ml-1 mb-1">mg/dL</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-xs text-green-600 mt-1">Normal</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Weight</span>
                  <div className="flex items-end mt-2">
                    <span className="text-2xl font-bold text-gray-900">65</span>
                    <span className="text-sm text-gray-500 ml-1 mb-1">kg</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <span className="text-xs text-blue-600 mt-1">Stable</span>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Recent Activity</h3>
                  <button className="text-sm text-blue-600 hover:underline">View All</button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-blue-100 p-2 mr-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Appointment with Dr. Emily Chen</p>
                      <p className="text-sm text-gray-500">June 15, 2023 - Cardiology Consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 p-2 mr-4">
                      <Pill className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Prescription Refilled</p>
                      <p className="text-sm text-gray-500">June 12, 2023 - Lisinopril 10mg (60 tablets)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-4">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Lab Results Available</p>
                      <p className="text-sm text-gray-500">June 8, 2023 - Complete Blood Count (CBC)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard 
              title="Upcoming Appointment" 
              icon={<Calendar className="w-5 h-5 text-blue-500" />}
              content={
                <div>
                  <p className="font-medium">Dr. Emily Chen (Cardiologist)</p>
                  <p className="text-gray-500">Tomorrow, 10:30 AM</p>
                  <p className="text-gray-500 mt-1">Heart Care Center, Building A</p>
                  <div className="mt-3 flex space-x-3">
                    <button 
                      onClick={() => {
                        const appointment = { 
                          doctorName: "Dr. Emily Chen", 
                          specialty: "Cardiologist", 
                          date: "Tomorrow", 
                          time: "10:30 AM", 
                          location: "Heart Care Center, Building A", 
                          status: "upcoming" as 'upcoming' | 'completed' 
                        };
                        setSelectedAppointment(appointment);
                        setShowRescheduleModal(true);
                      }}
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-100 transition-colors"
                    >
                      Reschedule
                    </button>
                    <button 
                      onClick={() => showFeatureUnavailable('cancel')}
                      className="px-3 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-md hover:bg-red-100 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                  {featureMessage === 'cancel' && (
                    <p className="mt-2 text-sm text-amber-600">
                      Cancel feature will be available soon.
                    </p>
                  )}
                </div>
              }
            />
            
            <DashboardCard 
              title="Medication Schedule" 
              icon={<Pill className="w-5 h-5 text-blue-500" />}
              content={
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Lisinopril 10mg</p>
                        <p className="text-xs text-gray-500">1 tablet - Once daily</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">8:00 AM</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Atorvastatin 20mg</p>
                        <p className="text-xs text-gray-500">1 tablet - At bedtime</p>
                      </div>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">9:00 PM</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Metformin 500mg</p>
                        <p className="text-xs text-gray-500">1 tablet - Twice daily</p>
                      </div>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Multiple</span>
                    </div>
                  </div>
                  <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">View Full Schedule</button>
                </div>
              }
            />
            
            <DashboardCard 
              title="AI Health Insights" 
              icon={<Bot className="w-5 h-5 text-blue-500" />}
              content={
                <div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Your blood pressure readings have been stable for 2 months. Keep up with your current medication and exercise routine.</p>
                  </div>
                  <div className="mt-3 bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Your diet tracker shows improved nutrition patterns. This may be contributing to your lower cholesterol levels.</p>
                  </div>
                  <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">View All Insights</button>
                </div>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard 
              title="Recent Lab Results" 
              icon={<FileText className="w-5 h-5 text-blue-500" />}
              content={
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-medium">Complete Blood Count (CBC)</p>
                      <p className="text-xs text-gray-500">June 8, 2023</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Normal</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-medium">Lipid Panel</p>
                      <p className="text-xs text-gray-500">June 8, 2023</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Slightly High</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-medium">Comprehensive Metabolic Panel</p>
                      <p className="text-xs text-gray-500">June 8, 2023</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Normal</span>
                  </div>
                  
                  <button className="text-blue-600 text-sm font-medium hover:underline">View All Lab Results</button>
                </div>
              }
            />
            
            <DashboardCard 
              title="Health Tasks & Reminders" 
              icon={<FilePlus2 className="w-5 h-5 text-blue-500" />}
              content={
                <div className="space-y-3">
                  <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <div>
                      <p className="font-medium">Schedule Dental Checkup</p>
                      <p className="text-xs text-gray-500">Due: June 30, 2023</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">High Priority</span>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <div>
                      <p className="font-medium">Lab test for Thyroid Function</p>
                      <p className="text-xs text-gray-500">Due: July 10, 2023</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Medium Priority</span>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <input type="checkbox" className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked />
                    <div>
                      <p className="font-medium line-through text-gray-400">Review latest lab results</p>
                      <p className="text-xs text-gray-400">Completed: June 15, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="text-blue-600 text-sm font-medium hover:underline">Add Task</button>
                    <button className="text-blue-600 text-sm font-medium hover:underline">View All Tasks</button>
                  </div>
                </div>
              }
            />
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Appointments</h2>
              <button 
                onClick={openBookingModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Book New Appointment
              </button>
            </div>
            
            <div className="space-y-6">
              <AppointmentCard 
                doctorName="Dr. Emily Chen"
                specialty="Cardiologist"
                date="June 21, 2023"
                time="10:30 AM"
                location="Heart Care Center, Building A"
                status="upcoming"
              />
              
              <AppointmentCard 
                doctorName="Dr. James Wilson"
                specialty="Neurologist"
                date="July 5, 2023"
                time="3:45 PM"
                location="Neurology Clinic, 3rd Floor"
                status="upcoming"
              />
              
              <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Past Appointments</h3>
              
              <AppointmentCard 
                doctorName="Dr. Sarah Johnson"
                specialty="General Physician"
                date="May 10, 2023"
                time="9:15 AM"
                location="Main Hospital, Room 204"
                status="completed"
              />
              
              <AppointmentCard 
                doctorName="Dr. Michael Brown"
                specialty="Dermatologist"
                date="April 18, 2023"
                time="2:00 PM"
                location="Skin Care Center"
                status="completed"
              />
            </div>
          </div>
          
          {/* Reschedule Modal */}
          {showRescheduleModal && selectedAppointment && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">Reschedule Appointment</h3>
                <p className="mb-4">
                  You are rescheduling your appointment with {selectedAppointment.doctorName} ({selectedAppointment.specialty}) 
                  originally scheduled for {selectedAppointment.date} at {selectedAppointment.time}.
                </p>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    New Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    New Time
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>9:00 AM</option>
                    <option>9:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>2:00 PM</option>
                    <option>2:30 PM</option>
                    <option>3:00 PM</option>
                    <option>3:30 PM</option>
                    <option>4:00 PM</option>
                    <option>4:30 PM</option>
                  </select>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={closeRescheduleModal}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmReschedule}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Book Appointment Modal */}
          {showBookingModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">Book New Appointment</h3>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Doctor
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Dr. Emily Chen (Cardiologist)</option>
                    <option>Dr. James Wilson (Neurologist)</option>
                    <option>Dr. Sarah Johnson (General Physician)</option>
                    <option>Dr. Michael Brown (Dermatologist)</option>
                    <option>Dr. Robert Lee (Endocrinologist)</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Reason for Visit
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Regular Check-up</option>
                    <option>Follow-up</option>
                    <option>New Condition</option>
                    <option>Prescription Renewal</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Time
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>9:00 AM</option>
                    <option>9:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>2:00 PM</option>
                    <option>2:30 PM</option>
                    <option>3:00 PM</option>
                    <option>3:30 PM</option>
                    <option>4:00 PM</option>
                    <option>4:30 PM</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Add any additional information for the doctor..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={closeBookingModal}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmBooking}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="records">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Medical Records</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Upload New Record
              </button>
            </div>
            
            <div className="space-y-4">
              <RecordCard 
                title="Annual Physical Examination"
                date="May 10, 2023"
                doctor="Dr. Sarah Johnson"
                type="Examination Report"
              />
              
              <RecordCard 
                title="Blood Test Results"
                date="May 8, 2023"
                doctor="Lab Services"
                type="Laboratory Report"
              />
              
              <RecordCard 
                title="Echocardiogram"
                date="February 15, 2023"
                doctor="Dr. Emily Chen"
                type="Diagnostic Imaging"
              />
              
              <RecordCard 
                title="MRI - Lower Back"
                date="November 22, 2022"
                doctor="Radiology Department"
                type="Diagnostic Imaging"
              />
              
              <RecordCard 
                title="Allergist Consultation"
                date="October 5, 2022"
                doctor="Dr. Robert Lee"
                type="Specialist Report"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prescriptions">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Prescriptions</h2>
              <div className="flex space-x-4">
                <button 
                  onClick={() => showToastMessage('Medication history will be available soon.')}
                  className="text-blue-600 hover:underline"
                >
                  Medication History
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Request Refill
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <PrescriptionCard 
                medication="Lisinopril 10mg"
                instructions="Take 1 tablet by mouth once daily"
                prescribedDate="June 15, 2023"
                doctor="Dr. Emily Chen"
                refills={2}
                active={true}
              />
              
              <PrescriptionCard 
                medication="Atorvastatin 20mg"
                instructions="Take 1 tablet by mouth at bedtime"
                prescribedDate="June 15, 2023"
                doctor="Dr. Emily Chen"
                refills={5}
                active={true}
              />
              
              <PrescriptionCard 
                medication="Metformin 500mg"
                instructions="Take 1 tablet by mouth twice daily with meals"
                prescribedDate="May 10, 2023"
                doctor="Dr. Sarah Johnson"
                refills={3}
                active={true}
              />
              
              <PrescriptionCard 
                medication="Amoxicillin 500mg"
                instructions="Take 1 capsule by mouth three times daily for 10 days"
                prescribedDate="April 18, 2023"
                doctor="Dr. Michael Brown"
                refills={0}
                active={false}
              />
            </div>
            
            {/* Medication History Section (Hidden by default) */}
            <div className="mt-8 border-t border-gray-200 pt-6 hidden">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Medication History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Lisinopril</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10mg daily</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 15, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Current</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hypertension</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Atorvastatin</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20mg daily</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 15, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Current</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">High Cholesterol</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Metformin</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500mg twice daily</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 10, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Current</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Type 2 Diabetes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Amoxicillin</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500mg three times daily</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 18, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 28, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bacterial Infection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Make Payment
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 15, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cardiology Consultation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹12,500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">View Receipt</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 10, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Annual Physical</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹6,000</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">View Receipt</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 18, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dermatology Visit</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹3,500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Insurance Pending</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">View Details</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">March 5, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Lab Tests</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹2,500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">View Receipt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="aihealth">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">AI Health Assistant</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">Upload Medical Documents</h3>
                    <span className="text-xs text-gray-500">For better AI analysis</span>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Drag and drop your medical reports or test results here</p>
                    <p className="text-xs text-gray-500 mt-1">Supports PDF, JPG, PNG (max 10MB)</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                      Browse Files
                    </button>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm">Blood_Test_Results_June2023.pdf</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-green-600">Uploaded</span>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg h-[500px] overflow-hidden flex flex-col mb-4">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-[85%]">
                        <p className="text-gray-700 text-sm">Hello Sarah, I'm your AI health assistant. I've analyzed your uploaded blood test results and can provide insights or answer questions. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end mb-6">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[85%]">
                        <p className="text-gray-700 text-sm">Can you tell me if there's anything concerning in my blood test results?</p>
                      </div>
                      <div className="bg-gray-300 rounded-full p-2 ml-3">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-6">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-[85%]">
                        <p className="text-gray-700 text-sm font-medium">For LDL Cholesterol (130 mg/dL):</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                          <li>Increase fiber intake (oats, beans, fruits)</li>
                          <li>Reduce saturated fats (limit red meat, full-fat dairy)</li>
                          <li>Consider plant sterols/stanols (found in certain margarines)</li>
                          <li>Aim for 30 minutes of exercise most days</li>
                        </ul>
                        
                        <p className="text-gray-700 text-sm font-medium mt-3">For Vitamin D (25 ng/mL):</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                          <li>15-30 minutes of sun exposure a few times weekly</li>
                          <li>Include vitamin D-rich foods (fatty fish, egg yolks, fortified foods)</li>
                          <li>Consider a supplement of 1000-2000 IU daily</li>
                        </ul>
                        
                        <p className="text-gray-700 text-sm mt-3">Would you like me to schedule a follow-up with Dr. Johnson to discuss these findings in more detail?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-end mb-6">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[85%]">
                        <p className="text-gray-700 text-sm">Yes, please provide recommendations for both issues.</p>
                      </div>
                      <div className="bg-gray-300 rounded-full p-2 ml-3">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-3">
                        <Bot className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-[85%]">
                        <p className="text-gray-700 text-sm font-medium">For LDL Cholesterol (130 mg/dL):</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                          <li>Increase fiber intake (oats, beans, fruits)</li>
                          <li>Reduce saturated fats (limit red meat, full-fat dairy)</li>
                          <li>Consider plant sterols/stanols (found in certain margarines)</li>
                          <li>Aim for 30 minutes of exercise most days</li>
                        </ul>
                        
                        <p className="text-gray-700 text-sm font-medium mt-3">For Vitamin D (25 ng/mL):</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                          <li>15-30 minutes of sun exposure a few times weekly</li>
                          <li>Include vitamin D-rich foods (fatty fish, egg yolks, fortified foods)</li>
                          <li>Consider a supplement of 1000-2000 IU daily</li>
                        </ul>
                        
                        <p className="text-gray-700 text-sm mt-3">Would you like me to schedule a follow-up with Dr. Johnson to discuss these findings in more detail?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 p-3">
                    <form className="flex items-center">
                      <input 
                        type="text" 
                        placeholder="Type your health question here..." 
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors">
                        <MessageSquare className="w-6 h-6" />
                      </button>
                    </form>
                    <div className="mt-2 flex justify-end items-center text-xs text-gray-500">
                      <button className="text-blue-500 hover:underline">Clear conversation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">AI-Recommended Doctors</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                        EC
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Dr. Emily Chen</h3>
                        <p className="text-sm text-gray-600">Cardiologist</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-2">(125 reviews)</span>
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-2">
                          <strong>AI recommendation:</strong> Based on your LDL cholesterol levels, a cardiologist consultation is recommended.
                        </p>
                        <button className="mt-2 px-4 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-3">
                        RL
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Dr. Robert Lee</h3>
                        <p className="text-sm text-gray-600">Endocrinologist</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-2">(98 reviews)</span>
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-2">
                          <strong>AI recommendation:</strong> Recommended for vitamin D deficiency management and metabolic health monitoring.
                        </p>
                        <button className="mt-2 px-4 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">AI Health Insights</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3 py-1">
                    <p className="text-sm text-gray-700">Your blood pressure readings have been consistent over the last 3 months.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-3 py-1">
                    <p className="text-sm text-gray-700">Your vitamin D levels are lower than optimal range. Consider supplementation.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-3 py-1">
                    <p className="text-sm text-gray-700">Your exercise frequency has increased by 20% this month. Great progress!</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-3 py-1">
                    <p className="text-sm text-gray-700">Sleep patterns show improvement but still averaging below 7 hours/night.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Health Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="h-8 w-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Understanding Cholesterol Levels</p>
                        <p className="text-xs text-gray-500">American Heart Association</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Vitamin D: Essential Guide</p>
                        <p className="text-xs text-gray-500">National Institutes of Health</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="h-8 w-8 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Improving Sleep Quality</p>
                        <p className="text-xs text-gray-500">Sleep Foundation</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="h-8 w-8 bg-red-100 rounded-md flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Heart-Healthy Diet Recommendations</p>
                        <p className="text-xs text-gray-500">Cleveland Clinic</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Toast notification */}
          {showToast && (
            <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
              {toastMessage}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Component for dashboard cards
const DashboardCard = ({ title, icon, content }: DashboardCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-medium text-gray-900 ml-2">{title}</h3>
      </div>
      {content}
    </div>
  );
};

// Component for appointment cards
const AppointmentCard = ({ doctorName, specialty, date, time, location, status }: AppointmentCardProps) => {
  const [showCancelMessage, setShowCancelMessage] = useState(false);
  
  const handleCancelRequest = () => {
    setShowCancelMessage(true);
    setTimeout(() => setShowCancelMessage(false), 3000);
  };

  return (
    <div className={`border ${status === 'upcoming' ? 'border-blue-100 bg-blue-50' : 'border-gray-100 bg-white'} rounded-lg p-4`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{doctorName}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
          <div className="flex items-center mt-2">
            <Calendar className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600 mr-4">{date}</span>
            <Clock className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{location}</p>
          
          {showCancelMessage && (
            <p className="mt-2 text-sm text-amber-600">
              Cancel feature will be available soon.
            </p>
          )}
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </span>
          
          <div className="mt-3 space-x-2">
            {status === 'upcoming' && (
              <>
                <button 
                  onClick={() => {
                    const appointment = { 
                      doctorName, 
                      specialty, 
                      date, 
                      time, 
                      location, 
                      status 
                    };
                    document.dispatchEvent(new CustomEvent('reschedule-appointment', { detail: appointment }));
                  }}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Reschedule
                </button>
                <button 
                  onClick={handleCancelRequest}
                  className="text-red-600 text-sm font-medium hover:underline"
                >
                  Cancel
                </button>
              </>
            )}
            {status === 'completed' && (
              <button className="text-blue-600 text-sm font-medium hover:underline">View Summary</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for medical record cards
const RecordCard = ({ title, date, doctor, type }: RecordCardProps) => {
  const [showUnavailableMessage, setShowUnavailableMessage] = useState<string | null>(null);

  const handleRecordAction = (action: string) => {
    setShowUnavailableMessage(action);
    setTimeout(() => setShowUnavailableMessage(null), 3000);
  };

  return (
    <div className="border border-gray-100 rounded-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">Date: {date}</p>
          <p className="text-sm text-gray-600">Provider: {doctor}</p>
          <p className="text-sm text-gray-600">Type: {type}</p>
          
          {showUnavailableMessage && (
            <p className="mt-2 text-sm text-amber-600">
              This feature is not available yet. You cannot {showUnavailableMessage} records at this time.
            </p>
          )}
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button onClick={() => handleRecordAction('view')} className="text-blue-600 text-sm font-medium hover:underline">View</button>
          <button onClick={() => handleRecordAction('download')} className="text-blue-600 text-sm font-medium hover:underline">Download</button>
          <button onClick={() => handleRecordAction('share')} className="text-blue-600 text-sm font-medium hover:underline">Share</button>
        </div>
      </div>
    </div>
  );
};

// Component for prescription cards
const PrescriptionCard = ({ medication, instructions, prescribedDate, doctor, refills, active }: PrescriptionCardProps) => {
  const [showRefillMessage, setShowRefillMessage] = useState(false);
  
  const handleRefillRequest = () => {
    setShowRefillMessage(true);
    setTimeout(() => setShowRefillMessage(false), 3000);
  };

  return (
    <div className={`border rounded-lg p-4 ${active ? 'border-gray-100' : 'border-gray-200 bg-gray-50'}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{medication}</h3>
          <p className="text-sm text-gray-600">Instructions: {instructions}</p>
          <p className="text-sm text-gray-600">Prescribed: {prescribedDate}</p>
          <p className="text-sm text-gray-600">Provider: {doctor}</p>
          
          {showRefillMessage && (
            <p className="mt-2 text-sm text-amber-600">
              Refill request feature will be available soon.
            </p>
          )}
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {active ? 'Active' : 'Expired'}
          </span>
          
          <p className="text-sm text-gray-600 mt-2">Refills remaining: {refills}</p>
          
          {active && refills > 0 && (
            <button 
              onClick={handleRefillRequest}
              className="mt-2 text-blue-600 text-sm font-medium hover:underline"
            >
              Request Refill
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientPortal; 