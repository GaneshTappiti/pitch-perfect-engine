
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  status: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { toast } = useToast();

  const handleMessage = () => {
    toast({
      title: "Message initiated",
      description: `Opening chat with ${member.name}...`,
    });
  };

  return (
    <>
      <Card className="workspace-card hover:shadow-lg transition-all">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span>{member.avatar}</span>
              </div>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <div className={`h-2 w-2 rounded-full ${
              member.status === 'online' ? 'bg-green-500' : 
              member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
            }`}></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{member.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{member.phone}</span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsProfileOpen(true)}
              className="hover:bg-primary/10"
            >
              View Profile
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleMessage}
              className="hover:bg-primary/10"
            >
              Message
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Team Member Profile</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                {member.avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {["Product Strategy", "UX Design", "Marketing", "Leadership"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Work History</h4>
                <div className="space-y-2 text-sm">
                  <p>Previously at: Google, Amazon</p>
                  <p>Education: Stanford University</p>
                  <p>Years of experience: 8+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsProfileOpen(false)}>Close</Button>
            <Button onClick={handleMessage}>Message</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamMemberCard;
