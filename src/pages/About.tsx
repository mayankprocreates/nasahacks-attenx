import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, ExternalLink, Users, Trophy, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Mayank Singh",
      role: "Leader & Developer",
      instagram: "https://www.instagram.com/mayy.singh/",
      linkedin: "https://www.linkedin.com/in/mayank-r-singh/",
      description: "Full-stack developer and team leader driving the technical vision"
    },
    {
      name: "Charvi Bhati",
      role: "Team Member",
      instagram: "https://www.instagram.com/charviiiieeee/",
      description: "Focused on design and user experience aspects"
    },
    {
      name: "Ravish Kumar",
      role: "Team Member",
      instagram: "https://www.instagram.com/itzz_rk_s/",
      description: "Contributing to project development and research"
    },
    
    {
      name: "Yash Pardeshi",
      role: "Team Member",
      instagram: "https://www.instagram.com/rotaluhu/",
      description: "Supporting development and data analysis"
    },
    {
      name: "Shahrukh Khan",
      role: "Team Member",
      instagram: "https://www.instagram.com/tf_shahrukh_/",
      description: "Contributing to research and project coordination"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Team AttenX
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers and researchers participating in the NASA Space Apps Challenge 2025, 
              creating innovative solutions to visualize Earth's changing landscape through satellite imagery.
            </p>
          </motion.div>

          {/* Challenge Info */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-8 w-8 text-yellow-400" />
                  <div>
                    <CardTitle className="text-2xl text-white">NASA Space Apps Challenge 2025</CardTitle>
                    <CardDescription className="text-slate-300 text-lg">
                      <div className="flex items-center space-x-2 mt-2">
                        <MapPin className="h-5 w-5 text-blue-400" />
                        <span>Sandip University, Nashik</span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our project, "Earth Whispers", is designed to showcase the dramatic changes happening to our planet 
                  through powerful before-and-after satellite imagery. We're leveraging modern web technologies to create 
                  an immersive experience that tells the story of climate change and environmental transformation.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">React</Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-orange-600 text-white">Framer Motion</Badge>
                  <Badge variant="secondary" className="bg-red-600 text-white">Vite</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                            {member.name}
                          </CardTitle>
                          <CardDescription className="text-slate-400">
                            {member.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                        {member.description}
                      </p>
                      <div className="flex space-x-3">
                        {member.instagram && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all"
                            onClick={() => window.open(member.instagram, '_blank')}
                          >
                            <Instagram className="h-4 w-4 mr-2" />
                            Instagram
                          </Button>
                        )}
                        {member.linkedin && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                            onClick={() => window.open(member.linkedin, '_blank')}
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Mission */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  To create compelling visual narratives that demonstrate the impact of climate change and human activity 
                  on our planet. Through innovative web technologies and satellite imagery, we aim to make environmental 
                  data accessible and emotionally resonant, inspiring action for a sustainable future.
                </p>
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Explore Our Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;