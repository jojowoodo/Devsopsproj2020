# Devsopsproj2020
Grupp projekt DevOps. Ivan, Atte, Jonas, Rebecca.



Här finns äventuella tilläggs detaljer om vårt projekt.



User Stories nedan:

Som konsument vill Rebecca ha en fungerande knapp som känns responsiv och ger ett snabbt resultat.


Jonas är av samma åsikt från användarens perspektiv, sidan måste fungera bra och vara lätt användbar samt responsiv.
Det som användaren också skulle uppskatta är att sidan/appen känns som om den har en mening och att man lätt förstår vad den handlar om, vad man kan göra på den och konkret vilken nytta man har av den. 
Den ska också vara lätt navigerbar om man har mycket information tillgängligt.

Del 1 av projektet fungerar som så: Vi har en build project i AWS Codebuild som är kopplad till vår github repo, denna buildar vår projekt på varje push och på varje pull request, efter att man gör en pull
request så buildar kollar den om projektet hade en succcessful build före den låter en mergea med master. Man måste även ha någon som reviewar din pull request pre-merge.